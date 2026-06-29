import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, backgroundColor: '#f0f0f0' },
  container: { border: '5px solid #1a202c', padding: 40, height: '100%' },
  title: { fontSize: 30, textAlign: 'center', marginBottom: 20, fontWeight: 'bold' },
  text: { fontSize: 16, marginBottom: 10 }
});

export const CertificateTemplate = ({ name, email }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>CERTIFICATE OF COMPLETION</Text>
        <Text style={styles.text}>This certifies that: {name}</Text>
        <Text style={styles.text}>Email: {email}</Text>
        <Text style={styles.text}>Has successfully completed the required coursework.</Text>
      </View>
    </Page>
  </Document>
);