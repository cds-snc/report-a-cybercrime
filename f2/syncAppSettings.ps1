[CmdletBinding()]
param (
    $resourceGroup,
	$webAppName
)

$rg = $resourceGroup
$appName = $webAppName

$slot           = ""
$envs = New-Object System.Collections.Generic.HashSet[string]

function GetEnvVariables($envs) {
	$Files = Gci -Recurse -EA 4 ($Env:BUILD_SOURCESDIRECTORY + "/src/")  | where {$_.extension -eq ".js" -and $_.name -notlike "*.test.js"}
	$AllFiles = $Files + (Get-Item ($Env:BUILD_SOURCESDIRECTORY + "/server.js"))
	write-host $AllFiles.Count
	$regex = 'process\.env\.(\w+)'

	foreach($file in $AllFiles) {
		write-host "Parsing env variables in file $($file.FullName)"
		select-string -Path $file.FullName -Pattern $regex -AllMatches |
		foreach-object {
			$var = $_.Matches.Groups[1].Value
			$envs.Add($var)
			$var
		}
	}
}

Write-Host "Parsing source code from $($Env:BUILD_SOURCESDIRECTORY)"

GetEnvVariables($envs)

Write-Host "load webApplication and settings..."
$webApp = Get-AzWebApp -ResourceGroupName $rg -Name $appName
$webAppSettings = $webApp.SiteConfig.AppSettings

Write-Host "The following application settings are already available in the Azure webapp '$appName':"
$webAppSettings | ft

# copy existing app settings to hash
foreach ($setting in $webAppSettings) {
  $envs.Remove($setting.Name)
}

if($envs.Count -gt 0) {
    Write-Error "There are missing app setting in Azure app service $envs"
    exit 1
}