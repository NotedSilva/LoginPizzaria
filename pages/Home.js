import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pizzaria Silva</Text>
      <ScrollView>
        <Text style={styles.titulo}>Pizzas</Text>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
            source={require('../assets/napolitana.jpg')}
          />

          <Text style={styles.subtitulo}> Pizza Napolitana</Text>

          <Text style={styles.paragraph}> R$35 REAIS</Text>

          <Text style={styles.paragraph}> Pizza(broto) com 4 pedaços para uma pessoa</Text>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
            source={require('../assets/quatro.jpg')}
          />
          <Text style={styles.subtitulo}> Pizza Quatro Queijos  </Text>
          <Text style={styles.paragraph}> R$50 REAIS</Text>
          <Text style={styles.paragraph}> Pizza (broto) com 4 pedaços e massa fina para uma pessoa </Text>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
            source={require('../assets/caipira.jpg')}
          />
          <Text style={styles.subtitulo}> Pizza Caipira </Text>
          <Text style={styles.paragraph}> R$40 REAIS</Text>
          <Text style={styles.paragraph}> Pizza grande com 8 pedaços</Text>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
            source={require('../assets/marguerita.jpg')}
          />
          <Text style={styles.subtitulo}> Pizza Marguerita </Text>
          <Text style={styles.paragraph}> R$55 REAIS</Text>
          <Text style={styles.paragraph}> Pizza grande com 8 pedaços</Text>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
            source={require('../assets/frango.jpg')}
          />
          <Text style={styles.subtitulo}>Pizza Frango com catupiry</Text>
          <Text style={styles.paragraph}> R$42 REAIS</Text>
          <Text style={styles.paragraph}> Pizza grande com 8 pedaços</Text>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
            source={require('../assets/cogumelo.jpg')}
          />
          <Text style={styles.subtitulo}>Pizza de cogumelos</Text>
          <Text style={styles.paragraph}> R$50 REAIS</Text>
          <Text style={styles.paragraph}> Pizza grande com 8 pedaços</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFE0',
    padding: 8,
    alignItems: 'center',
  },

  paragraph: {
    marginTop: 24,
    fontSize: 18,
    textAlign: 'center',
  },

  img: {
    width: 250,
    height: 200,
    borderRadius: 8,
    paddingTop: 15,
    marginTop: 10,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  titulo: {
    color: '#b80000',
    fontSize: 30,
    marginTop: 50,
    textAlign: 'center',
  },

  cxfoto: {
    flex: 1,
    backgroundColor: '#FFEFD5',
    marginTop: 20,
    margin: 20,
    alignItems: 'center',
    borderRadius: 15,
    width: 320,
  },
});
