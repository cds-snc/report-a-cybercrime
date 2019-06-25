workflow "Lint all Dockerfiles" {
  on = "push"
  resolves = ["Dockerfile linter"]
}

action "Dockerfile linter" {
  uses = "docker://cdssnc/docker-lint"
}

workflow "Test a11y" {
  on = "deployment_status"
  resolves = ["docker://cdssnc/a11y-multiple-page-checker:latest"]
}

action "docker://cdssnc/a11y-multiple-page-checker:latest" {
  uses = "docker://cdssnc/a11y-multiple-page-checker:latest"
} 