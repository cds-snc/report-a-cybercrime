Fixes #(issue)

# Description

> Please include a summary of the change.

# Did you add or change any fields in the report data?

- [ ] Update the confirmation page code so that the new fields appear there.
- [ ] Run `utils/extractFields.js` on a `/submit` network curl command to create the new `f2/fieldList.json` file for field validation.
- [ ] Update `formatAnalystEmail.js` to use the new fields.
- [ ] Run the app using `npm run prod` and ensure that both the confirmation page and the report email contains data entered into the new or changed fields.

# Any new packages installed?

> Give details

# Required followup work

> Is there anything related to this that still needs to be done (ex: documentation changes).

# Checklist:

- [ ] I have looked at my code on GitHub and it all looks good (ex: no random commented out code or console.logs)
- [ ] I have added and needed tests for my changes (in particular for new screens)
- [ ] I have added a comment to any confusing code
- [ ] I have added documentation to any modified front-end code. (Or added missing documentation)
