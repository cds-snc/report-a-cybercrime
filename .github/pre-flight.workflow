workflow "Pre-flight checks" {
  on = "push"
  resolves = ["Has LICENSE.md"]
}

action "Has LICENSE.md" {
  uses = "docker://alpine:3.9.2"
  args = ["sh", "-c", "([ -f $GITHUB_WORKSPACE/LICENSE.md ] && exit 0) || exit 1"]
}
