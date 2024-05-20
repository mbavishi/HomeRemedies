import { ScrollView } from 'react-native';
import Layout from "./layout";
import Card from "./card";

export default function Home() {
  return (
    <Layout>
      <ScrollView>
        <Card />
      </ScrollView>
    </Layout>
  );
}
