import { StyleSheet } from '@react-pdf/renderer';

// Create styles
export const pdfStyles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },  
    container: {
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      borderBottomStyle: 'solid',
      alignItems: 'stretch',
    },  
    title: {
      fontSize: 24,
      textAlign: 'center'
    },  
    subtitle: {
      fontSize: 18,
      marginLeft: 12,
      marginTop: 24
      
    },
    question: {
      fontSize: 12,
      marginLeft: 12,
      marginTop: 10,
      color: 'black'
    },
    answer: {
      fontSize: 12,
      marginLeft: 12,
      marginTop: 10,
      fontWeight: 100,
      color: 'grey'
    } 
  });