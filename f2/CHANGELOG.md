# Changelog for report a cybercrime product

## V1.1.0 (2020-04-14)

### Client code:

- Added:

  - added a c19 Well component as detail summary (#1791)
  - add extra message for unsuccessful report (#1748)
  - Added the required GTM tag identifiers - (#1798)
  - check file extension better (#1760)
  - Show anonymous location on conf screen and report (#1770)
  - anonymous report flow (#1749)
  - add error message to postcode field (#1747)
  - validation for dates on money page (#1726)
  - Added GTM integration code (#1724)
  - initiate anonymouspage (#1679)
  - Newlocationpage (#1685)
  - validation for location page (#1717)
  - Validation dates (#1719)
  - Validation for contact details (#1711)
  - added Messages component. (#1644)
  - Prod version number (#1656)
  - Validation for location fields (#1689)

- Changed:

  - import EditButton from component for all summary pages (#1789)
  - set empty contactInfo fields (#1776)
  - Reformat postal code (#1782)
  - tweak phone number validation and add tests (#1763)
  - hide edit button if form submitted (#1759)
  - App header and footer regions (#1741)
  - only set submitted if submit succeeded (#1732)
  - Uifix inputspacing (#1727)
  - flatten report before submitting (#1712)
  - use redirect for equifax links (#1651)
  - tweak skiplink style (#1658)
  - remove submit button if already submitted (#1683)
  - Form validation - bump (#1510)

- Fixed:

  - Contact info email validation not allowing valid email - addresses (#1774)
  - update next page text for consent page (#1783)
  - hide contactinfo summary for anonymous reports (#1777)
  - fix nc3 links (#1735)
  - A11y fix ButtonLink role (#1677)
  - fix keyboard nav (#1660)
  - clear file input after alert (#1662)
  - fix target area for upload button (#1653)
  - change "go back" button's height to the same height as "cancel report" button (#1666)

### Server code:

- Added:

  - .env local mail var for anonymous reports (#1788)
  - add is-anonymous to analyst email (#1779)
  - Reports a day counter (#1664)
  - added helmet in server.js (#1674)
  - Get email addresses from ldap query (#1682)
  - restrict file number and size on server (#1648)

- Changed:

  - clean up analyst email a bit more (#1794)
  - Change CAFC redirect to https (#1792)
  - tweak email (#1721)
  - unilingual confirmation emails (#1757)
  - remove submissionDate from the analyst email (#1728)
  - extract data from formidable manually (#1641)
  - clean up logging a bit (#1663)
  - Combine analyst emails (#1628)

- Fixed:

  - remove unused optionOther field (#1784)
  - FIX CORS for HTTPS (#1665) (#1669)
  - add moneyLost.methodOther field to analyst report (#1647)

### Content:

- Minor copy change (typo) (#1639)
- change GNCC to GNC3 (#1655)

### Azure:

- adding gtm hotfix (#1817)
- Fix for Logs in another Azure Subscription (#1619)
- Updating IMAGE_NAME reference (#1597)
- Fix for Continuous Deployment (#1690)

### Documentation / tests:

- add instructions for getting unencrypted analyst email (#1785)
- Typos in sb documentation (#1744)
- added CHANGELOG (#1710)
- Summary doc (#1736)
- sb doc for Pages. Reorganized Layout and Form sections (#1733)
- Sb descriptionlist (#1731)
- Error Summary component in storybook (#1723)
- Storybook Forms wiki/howto (#1684)
- more detailed p and text stories (#1643)
- added stuff to sb docs (#1671)
- added getting started page to storybook (#1661)
- Fixed Field, added container and layout to sb (#1675)
- cypress pack initial commit (#1247)

### Dependency updates:

- Update packages (#1751)
- fix: upgrade formidable from 1.2.1 to 1.2.2 (#1691)
- fix: upgrade styled-system from 5.1.4 to 5.1.5 (#1657)
- fix: upgrade mongodb from 3.5.2 to 3.5.3 (#1632)
- fix: upgrade react-scripts from 3.3.1 to 3.4.0 (#1642)
- fix: upgrade async from 3.1.1 to 3.2.0 (#1680)

## V1.0.0 (2020-03-12)

- initial release
