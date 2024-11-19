import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SectionList,
  StatusBar,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";


const datasource = [
  {
    data: [
      { key: 'Wartortle',img:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_8-2x.png' },
      { key: 'Poliwag', img:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_60-2x.png' },
    ],
    title: "Water",bgColor:"skyblue",textColor:"#02669f",icon:'water'
  },
  {
    data: [
      { key: 'Growlithe',img:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_58-2x.png' },
      { key: 'Vulpix', img:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_37-2x.png' },
    ],
    title: "Fire",bgColor:"orange",textColor:"#c14f07",icon:'fire'
  },
];


const styles = StyleSheet.create({
  container: {
    margin:10,
    marginBottom:200,
  },
  containerButton: {
    borderBottomWidth: 1,
    padding:20,

  },
  headerButton:{
    textAlign:'center',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:40,
    paddingRight:40,
    backgroundColor:'#12a2ee',
    color:'white',
    fontWeight:'bold',
  },
  headerContainer:{
    borderWidth:1,
    display:"flex",
    alignItems:"center",
    flexDirection:'row',
    justifyContent:"center",
    textAlign:'center',

  },
  headerText:{
    fontSize:30,
    fontWeight:'bold',
  },
  pokemonImage: {
    width: 250,
    height: 330,
  },
  pokemonText:{
    fontSize:20,
    fontWeight:'bold',
  },
  pokemonContainer: {
    backgroundColor:'#D8BFD8',
    display:"flex",
    alignItems:"center",
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:1,
    paddingHorizontal:10,
    paddingVertical:20,
  }

})

const Header=()=>{
  return(
      <View style={styles.containerButton}>
        <Text style={styles.headerButton}>Add Pokemon</Text>
      </View>
  );
}

const renderItem = ({item}) => {
  return (
      <TouchableOpacity  style={styles.pokemonContainer} >
        <Text style={styles.pokemonText}>{item.key}</Text>
        <Image source={{ uri: item.img }} style={styles.pokemonImage} />
      </TouchableOpacity>
  );
};
const Myapp=()=> {
  return (
      <View >
        <StatusBar hidden={true}/>
        <Header/>
        <View style={styles.container}>
          <SectionList sections={datasource} renderItem={renderItem}
                       renderSectionHeader={({section:{title,bgColor,textColor,icon}})=>(
                           <View style={[styles.headerContainer, {backgroundColor:bgColor}]}>
                             <Icon name={icon} size={30} color={textColor}  style={{marginRight:5,}}/>
                             <Text style={[styles.headerText,{ color:textColor}]}>
                               {title}
                             </Text>
                           </View>
                       )}/>
        </View>
      </View>
  );
}
export default Myapp;
