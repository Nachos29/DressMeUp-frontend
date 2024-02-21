import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function DeleteAccount() {
  return (
    <View style={styles.deleteModal}>
      <Modal visible={modalVisible} transparent animationType="slide" onRequestClose={closeModal}>
        <BlurView
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          blurType="light" // Vous pouvez utiliser "light", "dark" ou "extra light" pour le niveau de flou
          blurAmount={10} // Vous pouvez ajuster l'intensité du flou (entre 1 et 100)
        >
          <View style={{ backgroundColor: "#fff", padding: 20 }}>
            <Text>Contenu de la modal</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text>Fermer</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  deleteModal: {
    flex: 1,
    height: "20%",
    width: "20%",
    backgroundColor: "#6B9080",
  },
});
