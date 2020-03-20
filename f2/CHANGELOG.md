# Changelog for report a cybercrime product

## V1.1.0 (2020-03-16)

### Client code:

- Added:

  - added Messages component. (#1644)
  - Prod version number (#1656)
  - Validation for location fields (#1689)

- Changed:

  - use redirect for equifax links (#1651)
  - tweak skiplink style (#1658)
  - remove submit button if already submitted (#1683)
  - Form validation - bump (#1510)

- Fixed:

  - change GNCC to GNC3 (#1655)
  - fix keyboard nav (#1660)
  - clear file input after alert (#1662)
  - fix target area for upload button (#1653)
  - change "go back" button's height to the same height as "cancel report" button (#1666)

### Server code:

- Added:

  - Reports a day counter (#1664)
  - added helmet in server.js (#1674)
  - Get email addresses from ldap query (#1682)
  - restrict file number and size on server (#1648)

- Changed:

  - extract data from formidable manually (#1641)
  - clean up logging a bit (#1663)
  - Combine analyst emails (#1628)

- Fixed:

  - FIX CORS for HTTPS (#1665) (#1669)
  - add moneyLost.methodOther field to analyst report (#1647)

### Content:

- Minor copy change (typo) (#1639)

### Azure:

- Fix for Logs in another Azure Subscription (#1619)
- Updating IMAGE_NAME reference (#1597)
- Fix for Continuous Deployment (#1690)

### Documentation / tests:

- more detailed p and text stories (#1643)
- added stuff to sb docs (#1671)
- added getting started page to storybook (#1661)
- Fixed Field, added container and layout to sb (#1675)
- cypress pack initial commit (#1247)

### Dependency updates:

- fix: upgrade mongodb from 3.5.2 to 3.5.3 (#1632)
- fix: upgrade react-scripts from 3.3.1 to 3.4.0 (#1642)
- fix: upgrade async from 3.1.1 to 3.2.0 (#1680)

## V1.0.0 (2020-03-12)

- initial release
