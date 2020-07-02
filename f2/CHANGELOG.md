# Changelog for report a cybercrime product

## V1.4.0 (2020-06-09)

- E-mail to analysts redesigned to fix usability issues and files transfered by Azure Shared Access Signature instead of e-mail attachment (Pull Request #1975, Issues #1953, #1900, #1704)
- Fix bugs around enforcing user to consent to privacy statement (PR #1927, #1958, Issue #1924, #1957)
- Make self harm warning text in e-mail more visible (PR #1939, Issue #1932)
- Update Documentation (PR #1919, Issue #1827)
- Fix Bug on tracking user consent (PR #1946, Issue #1929)
- Tweaks to privacy statement (PR #1945, PR #1961, Issue #1942, #1959)
- Misc Code improvements (PR #1921, #1966 Issue #1894, #1626)
- Update links on thank you page (PR #1955, Issue #1952)
- Phantom button bug (PR #1948, Issue #1943)
- Fix Bug with form flow (Pr #1960, Issue #1954)
- Convert png to jpg automatically (PR #1951, Issue #1884)
- Add markup to phone numbers in app so mobile users can easily dial them (PR #1963, Issue #1455)
- Stop backend from allowing empty file uploads (PR #1964)
- Fix bug with NCFRS version number display (PR #1938, Issue #1922)
- Provide analyst with estimated province and city based on Postal Code (PR #1938, Issue #1922)
- Block ALL direct traffic that isn't coming from CAFC (PR #1974, Issue #1968)
- Make warning banner on DEV and Staging environments more obvious (PR #1978, Issue #1627)

## V1.3.0 (2020-05-26)

- More date validation tweaks (Pull Request #1809, #1889 Issue #1808, #1800, #1842)
- Tweaks to thank you page design (Pull Request #1851, Issue #1851)
- Added storybook (util/docs for devs, transparent to users) (Pull Request #1781, #1870, #1866)
- Fixed bug where a 2nd submission could fail (Pull Request #1863)
- Changes to application logging (Pull Request #1878)
- Added scripts for load testing (Pull Request #1856)
- Fixed bug where a report could fail if a user removed previously input data (PR #1872, Issue #1872)
- Fixed report not properly stating if user was anonymous: Pull Request (#1883, Issue #1881)
- Fixed bug in initialization of counter of # of reports submitted: (PR #1865, Issue #1819)
- Additional file uploads validation and error handling (PR #1891, #1890 Issue #1888, #1887, #1885)
- Improve language and direction for user on file uploads (PR #1904, Issue #1901)
- Added more automated testing and accessibility testing (PR #1841, #1907)
- Improve HTTP Server headers for better security (PR #1898, Issue #1871)
- Fixed bug where "cryptocurrency" shows up as "cash" in e-mail report (PR #1912, Issue #1905)
- Add warning in subject line of report when self harm words detected (PR #1914, Issue #1910)
- Improve enforcement of requirement of user consent (PR #1908, #1602)
- Improvements to application logging (PR #1909, #1916)
- Change label of report language from "en" and "fr" to "english" and "french" in report to analyst (PR #1915, Issue #1855)
- Added a way to devs to access app and verify deployment even when app is "closed for the day" (PR #1911, Issue #1882)
- Fix bug where user can't remove postal code after entering it (PR #1917, Issue #1906)
- Remove CAFC call centre number due to closure (PR #1928, Issue #1923)
- Update privacy statement (PR #1930, Issue #1926)

## V1.2.0 (2020-04-28)

- added more date validation (Pull Request #1799, issue #1786)
- added google tag manager related settings (Pull Request #1815, Pull Request #1814))
- added more sanitization of user inputs (Pull Request #1773, Issue #1775
- Make beta banner more obvious (Pull Request #1816)
- Added version number to the report (Pull Request #1768, Issue #1703)
- Added new fields to small business form for victims (Pull Request #1802, Issue #1790)
- Updating wording on some error messages (Pull Request #1822, Issue #1812)
- Changed the way a user can opt-in/opt-out to anonymous flow (Pull Request #1820, Issue #1804)
- Removed some debug logging (Pull Request #1832)
- Added more server side validation (Pull Request #1823)
- Updated version of "chakra" library (Pull Request #1837)
- Fixed translation issues (Pull Request #1829, #1848, Issue #1826)
- Add a summary block for anonymous opt-in on summary page (PR #1834, issue #1771)
- Formatting of e-mail report (PR #1849, Issue #1795)
- Fixed formatting and content issues with report e-mail (PR #1839, PR #1850, Issue #1836, Issue #1844)
- Redesign of some pages (Issue #1803)
- Fix bug where some french users were served the english version of the app (PR #1852, Issue #1830)
- Fix issue with how we limit number of reports (#PR #1838, Issue #1821)

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
