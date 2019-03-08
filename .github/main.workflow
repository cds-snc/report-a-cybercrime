workflow "Lint all Dockerfiles" {
  on = "push"
  resolves = ["Dockerfile linter"]
}

action "Dockerfile linter" {
  uses = "docker://cdssnc/docker-lint"
}
