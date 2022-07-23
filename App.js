import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, AsyncStorageStatic} from 'react-native';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, child, push, update } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkih9iuL5VcOm6gq-fQGxXmjXuKyrRaF4",
  authDomain: "horaslaborales-531ac.firebaseapp.com",
  databaseURL: "https://horaslaborales-531ac-default-rtdb.firebaseio.com",
  projectId: "horaslaborales-531ac",
  storageBucket: "horaslaborales-531ac.appspot.com",
  messagingSenderId: "985793048518",
  appId: "1:985793048518:web:2bc22d5fd2e121dc428cc7",
  measurementId: "G-2FS24FB712"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


// Leemos firebase
const starCountRef = ref(db, '/' + "Lunes");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
// Actualizar Firebase

function writeNewPost(horaIngreso,horaEgreso) {
  const db = getDatabase();
  const total = horaEgreso - horaIngreso;

  // A post entry.
  const postData = {
    ingreso: horaIngreso,
    egreso: horaEgreso,
    total: total
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'Lunes')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/Lunes'] = postData;
  return update(ref(db), updates);
}

writeNewPost(8,18);

onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data.ingreso);
});

export default function App() {


  const [number1, n1] = React.useState(null);
  const [number2, n2] = React.useState(null);
  const [total, setTotal] = React.useState(null);
  const sumar = () => {
    setTotal( parseFloat(number2) - parseFloat(number1))
  }

  const [number3, n3] = React.useState(null);
  const [number4, n4] = React.useState(null);
  const [total2, setTotal2] = React.useState(null);
  
  const sumar2 = () => {
    setTotal2( parseFloat(number4) - parseFloat(number3))
  }

  const [number5, n5] = React.useState(null);
  const [number6, n6] = React.useState(null);
  const [total3, setTotal3] = React.useState(null);
  
  const sumar3 = () => {
    setTotal3( parseFloat(number6) - parseFloat(number5))
  }

  const [number7, n7] = React.useState(null);
  const [number8, n8] = React.useState(null);
  const [total4, setTotal4] = React.useState(null);
  
  const sumar4 = () => {
    setTotal4( parseFloat(number8) - parseFloat(number7))
  }

  const [number9, n9] = React.useState(null);
  const [number10, n10] = React.useState(null);
  const [total5, setTotal5] = React.useState(null);
  
  const sumar5 = () => {
    setTotal5( parseFloat(number10) - parseFloat(number9))
  }

  const [number11, n11] = React.useState(null);
  const [number12, n12] = React.useState(null);
  const [total6, setTotal6] = React.useState(null);
  
  const sumar6 = () => {
    setTotal6( parseFloat(number12) - parseFloat(number11))
  }


  const [t, setT] = React.useState(null);
  
  const totalT = () => {
    setT(total+total2+total3+total4+total5+total6)
  }

  

  return (
    <View style={styles.container}>
      
      {/* LUNES */}

      <View style = {styles.subcontainer}>
        <View>
          <Text style = {styles.titulo}>
            L:
          </Text>
        </View>
        <TextInput
          style = {styles.input}
          keyboardType = "number-pad"
          placeholder='I'
          onChangeText={n1}
        />
        <TextInput
          style = {styles.input}
          keyboardType = "number-pad"
          placeholder='E'
          onChangeText={n2}
        />

        <Button
          title = '='
          onPress = {sumar}
        />

        <View style={styles.subt}>
          <Text style={styles.subtText}>{total}</Text>
        </View>
      </View>

      {/* Martes */}
      
      <View style = {styles.subcontainer}>
        <View>
          <Text style = {styles.titulo}>
            M:
          </Text>
        </View>
        <TextInput
          style = {styles.input}
          keyboardType = "number-pad"
          placeholder='I'
          onChangeText={n3}
        />
        <TextInput
          style = {styles.input}
          keyboardType = "number-pad"
          placeholder='E'
          onChangeText={n4}
        />

        <Button
          title = '='
          onPress = {sumar2}
        />

        <View style={styles.subt}>
          <Text style={styles.subtText}>{total2}</Text>
        </View>
      </View>

      {/* MIERCOLES */}

      <View style = {styles.subcontainer}>
        <View>
          <Text style = {styles.titulo}>
            M:
          </Text>
        </View>
        <TextInput
          style = {styles.input}
          keyboardType = "number-pad"
          placeholder='I'
          onChangeText={n5}
        />
        <TextInput
          style = {styles.input}
          keyboardType = "number-pad"
          placeholder='E'
          onChangeText={n6}
        />

        <Button
          title = '='
          onPress = {sumar3}
        />

        <View style={styles.subt}>
          <Text style={styles.subtText}>{total3}</Text>
        </View>
      </View>

      {/* Jueves */}

      <View style = {styles.subcontainer}>
        <View>
          <Text style = {styles.titulo}>
            J :
          </Text>
        </View>
        <TextInput
          style = {styles.input}
          keyboardType = "number-pad"
          placeholder='I'
          onChangeText={n7}
        />
        <TextInput
          style = {styles.input}
          keyboardType = "number-pad"
          placeholder='E'
          onChangeText={n8}
        />

        <Button
          title = '='
          onPress = {sumar4}
        />

        <View style={styles.subt}>
          <Text style={styles.subtText}>{total4}</Text>
        </View>
      </View>

      {/* Viernes */}

      <View style = {styles.subcontainer}>
        <View>
          <Text style = {styles.titulo}>
            V:
          </Text>
        </View>
        <TextInput
          style = {styles.input}
          keyboardType = "number-pad"
          placeholder='I'
          onChangeText={n9}
        />
        <TextInput
          style = {styles.input}
          keyboardType = "number-pad"
          placeholder='E'
          onChangeText={n10}
        />

        <Button
          title = '='
          onPress = {sumar5}
        />

        <View style={styles.subt}>
          <Text style={styles.subtText}>{total5}</Text>
        </View>
      </View>

      {/* Sabado */}

      <View style = {styles.subcontainer}>
        <View>
          <Text style = {styles.titulo}>
            S:
          </Text>
        </View>
        <TextInput
          style = {styles.input}
          keyboardType = "number-pad"
          placeholder='I'
          onChangeText={n11}
        />
        <TextInput
          style = {styles.input}
          keyboardType = "number-pad"
          placeholder='E'
          onChangeText={n12}
        />

        <Button
          title = '='
          onPress = {sumar6}
        />

        <View style={styles.subt}>
          <Text style={styles.subtText}>{total6}</Text>
        </View>
      </View>

      {/* Total Final */}

      <View style = {styles.subcontainer}>
        <Button title='Total:' onPress={totalT}/>
        <Text style = {styles.subt}>
          {t}
        </Text>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subcontainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  input:{
    borderWidth: 1,
    width: 25,
    margin: 8,
    textAlign: 'center'
  },
  titulo:{
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 'bold'
  },
  subt:{
    margin: 10
  },
  subtText:{
    fontSize: 15,
    fontWeight: 'bold',
  }
});


