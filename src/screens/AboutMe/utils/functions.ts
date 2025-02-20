import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Alert } from "react-native";

export const handleDownloadCV = async () => {
    try {
        const fileUri = FileSystem.documentDirectory + "CV-Kauã-Librelato.pdf";
        const downloadUrl =
            "https://drive.google.com/file/d/1-f9Mq7lX7LUHjvlKGaRHfuD6Up6Q2L3q/view?usp=drive_link"; //change link to my CV with pdf format

        const { uri } = await FileSystem.downloadAsync(downloadUrl, fileUri);

        if (!(await Sharing.isAvailableAsync())) {
            Alert.alert("Erro", "O compartilhamento não está disponível no seu dispositivo.");
            return;
        }

        await Sharing.shareAsync(uri);
    } catch (error) {
        console.error("Erro ao baixar o currículo:", error);
        Alert.alert("Erro", "Não foi possível baixar o currículo.");
    }
};
