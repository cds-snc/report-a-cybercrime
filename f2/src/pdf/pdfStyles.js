import { StyleSheet } from '@react-pdf/renderer'

// Create styles
export const pdfStyles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  header: {
    marginBottom: 10,
  },
  topbanner: {
    marginLeft: 35,
    height: 25,
    width: 215,
  },
  footerCanada: {
    position: 'absolute',
    marginLeft: 450,
    bottom: 30,
    height: 19,
    width: 60,
  },
  beta: {
    marginTop: 5,
    marginLeft: 35,
    height: 15,
    width: 33,
  },
  betaText: {
    fontSize: 10,
    marginTop: 8,
    marginLeft: 5,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  thankyou: {
    marginTop: 5,
    backgroundColor: '#92D68F',
    borderColor: '#3C9D3F',
    textAlign: 'center',
    flexDirection: 'column',
  },
  thankyouTitle: {
    marginTop: 10,
    fontSize: 25,
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
  },
  referenceNumber: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 15,
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
  },
  section: {
    paddingBottom: -5,
    alignItems: 'stretch',
  },
  sectionSeparator: {
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    marginLeft: 12,
    marginTop: 20,
    marginBottom: 10,
  },
  descriptionItem: {
    display: 'table',
    borderStyle: 'none',
    marginLeft: 12,
  },
  descriptionRow: {
    flexDirection: 'row',
  },
  descriptionItemTitle: {
    width: '40%',
    textAlign: 'left',
    paddingRight: 25,
  },
  descriptionItemDescription: {
    width: '60%',
    textAlign: 'left',
  },
  descriptionContentTitle: {
    marginTop: 10,
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  descriptionContentDescription: {
    marginTop: 10,
    fontSize: 12,
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    textAlign: 'left',
  },
  sectionContent: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    marginLeft: 12,
    marginTop: 10,
  },
  bottomSection: {
    paddingTop: 10,
    alignItems: 'stretch',
  },
  bottomTitle: {
    fontSize: 15,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 10,
  },
  bottomContent: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    marginLeft: 12,
    marginTop: 10,
  },
  bottomLink: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    marginLeft: 12,
    marginTop: 10,
  },
})
