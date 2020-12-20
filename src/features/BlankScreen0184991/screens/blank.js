import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_7: "", TextInput_11: "" }

  render = () => (
    <View style={styles.View_1}>
      <Image
        resizeMode="contain"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/logo_yAoeSYS.png"
        }}
        style={styles.Image_3}
      />
      <Image
        resizeMode="stretch"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/barra.PNG"
        }}
        style={styles.Image_31}
      />
      <Text style={styles.Text_5}>Login</Text>
      <TextInput
        placeholder=""
        style={styles.TextInput_7}
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <Text style={styles.Text_9}>Contraseña</Text>
      <TextInput
        placeholder="*****"
        style={styles.TextInput_11}
        value={this.state.TextInput_11}
        onChangeText={nextValue => this.setState({ TextInput_11: nextValue })}
      />
      <Button
        title="Ingresar"
        color="#f6a46d"
        style={styles.Button_13}
        onPress={() => alert("Pressed!")}
      />
      <Text style={styles.Text_15}>Versión 1.0</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {
    color: "#000",
    backgroundColor: "#ec6307",
    fontFamily: "Roboto-Regular"
  },
  Image_3: { alignSelf: "center" },
  Image_31: { height: 44, alignSelf: "center" },
  Text_5: {
    color: "#fff",
    backgroundColor: "#ec6307",
    fontFamily: "Roboto-Regular"
  },
  TextInput_7: { width: "90%", alignSelf: "center" },
  Text_9: {
    color: "#fff",
    backgroundColor: "#ec6307",
    fontFamily: "Roboto-Regular"
  },
  TextInput_11: { width: "90%", alignSelf: "center" },
  Button_13: {
    width: "95%",
    marginLeft: 7,
    alignSelf: "center",
    color: "#fff",
    fontFamily: "Roboto-Regular"
  },
  Text_15: {
    alignSelf: "center",
    color: "#fff",
    backgroundColor: "#ec6307",
    fontFamily: "Roboto-Regular"
  }
})
