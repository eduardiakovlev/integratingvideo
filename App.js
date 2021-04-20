import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable, Dimensions, Modal } from 'react-native';

import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const bkg = { uri: 'https://www.html.am/templates/downloads/bryantsmith/anoceanofsky/background.png' };
const header = { uri: 'https://www.html.am/templates/downloads/bryantsmith/anoceanofsky/anoceanofsky.jpg' };

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function Changes() {

  const [dimensions, setDimensions] = useState({ window, screen });
  const [mode, setMode] = useState("portrait");

  const [modalVisible, setModalVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape")  
    } else {
      setMode("portrait")   
    }
   }

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange)
    return () => {
      Dimensions.removeEventListener("change", onChange),
     modeMaker();
    };

  });

  return (
    <SafeAreaView style={styles.container}>

      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        supportedOrientations={['landscape']} 
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <WebView
    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
 />
 <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.closeText}>Hide Modal</Text>
        </Pressable>
  </Modal>

      <ImageBackground source={bkg} style={styles.bkg} imageStyle={{
              resizeMode: 'stretch'
            }}>
        <View style={styles.menuCont}>  
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={mode === "portrait" ? styles.navButton : styles.navBtnLand}>
              <Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxtLand}>Home</Text>
            </View>
            <Pressable onPress={() => setModalVisible(true)} style={mode === "portrait" ? styles.navButton : styles.navBtnLand}>
              <Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxtLand}>Show Video</Text>
            </Pressable>
            <View style={mode === "portrait" ? styles.navButton : styles.navBtnLand}>
              <Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxtLand}>Portfolio</Text>
            </View>
            <View style={mode === "portrait" ? styles.navButton : styles.navBtnLand}>
              <Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxtLand}>Services</Text>
            </View>
            <View style={mode === "portrait" ? styles.navButton : styles.navBtnLand}>
              <Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxtLand}>Contact</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.contentWrapper}>
          <ScrollView>
            {mode === "portrait"
            ?
                <View style={styles.headerBorder}>
                    <ImageBackground source={header} style={styles.headerBkg}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Barren Savannah</Text>
                        <Text style={styles.subtitle}>An XHTML 1.0 Strict Template by Bryant Smith</Text>
                        <View style={styles.playBtnCont}>
                          <View style={styles.playBtn}>
                            <Icon name="play" color="white" size={50} onPress={() => setModalVisible(true)} />
                            <Text style={styles.playVideo}>Play Video</Text>
                          </View>
                        </View>
                    </View>
                    </ImageBackground>
                </View>
            :
                <View style={styles.headerBorder}>
                    <View style={styles.header}>
                        <Text style={styles.titleLand}>Barren Savannah</Text>
                        <Text style={styles.subtitleLand}>An XHTML 1.0 Strict Template by Bryant Smith</Text>
                    </View>
                </View>
            }
            <View style={styles.textBorder}>
              <View style={mode === "portrait" ? styles.textContent : styles.textContentLand}>
                <View style={styles.paragraph}>
                  <Text style={styles.pTitle}>The Title of an Article</Text>
                  <Text style={styles.pText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :) This is what a link looks like.

                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
                  <View style={styles.quote}>
                    <Text>This is a block quote, use it to include quotes from yourself or others. All you have to do to include this element is wrap some text around blockquote tags</Text>
                  </View>
                </View>

                <View style={styles.paragraph}>
                  <Text style={styles.pTitle}>Titles are H1 Tags</Text>
                  <Text style={styles.pText}>Since the titles are H1 tags, try to include your keywords in them as search engines will look at them as being important content.

                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.

                  Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
                </View>

                <View style={styles.paragraph}>
                  <Text style={styles.pTitle}>Yet Another One!</Text>
                  <Text style={styles.pText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)

                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.

                  Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  bkg: {
    flex: 1,
    resizeMode: 'cover',
    bottom: 0,
    width: '100%'
  },
  navButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    height: 80
  },
  navBtnLand: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
    height: 80
  },
  navBtnTxt: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14
  },
  navBtnTxtLand: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18
  },
  contentWrapper: {
    flex: 0.9,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10
  },
  headerBorder: {
    backgroundColor: '#000',
    padding: 15
  },
  headerBkg: {
    height: 250
  },
  header: {
    padding: 10
  },
  title: {
    color: '#fff',
    fontSize: 30
  },
  titleLand: {
    color: '#fff',
    fontSize: 70,
    fontWeight: '700'
  },
  subtitleLand: {
      color: '#fff'
  },
  textBorder: {
    backgroundColor: '#000',
    padding: 15,
    marginTop: 20
  },
  textContent: {
    backgroundColor: '#fff',
    padding: 10
  },
  textContentLand: {
    backgroundColor: 'antiquewhite',
    padding: 60
  },
  pTitle: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10
  },
  pText: {
    lineHeight: 20,
    marginBottom: 20
  },
  quote: {
    padding: 20,
    marginBottom: 20,
    borderColor: '#C87002',
    borderWidth: 1,
    borderStyle: 'dashed'
  },
  playBtnCont: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%'
  },
  playBtn: {
    flexDirection: 'row',
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playVideo: {
    color: '#fff',
    paddingRight: 15
  },
  buttonClose: {
    backgroundColor: "orange",
    borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom:20,
        width: '15%',
        position: 'absolute',
        right: '10%',
        bottom: '5%'
  },
  closeText: {
    textAlign: 'center',
    color: '#fff'
  }
});
