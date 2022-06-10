import { File } from "@nbc-design/icons/lib/web/File";
import file from "./images/doc_how_to_teams_icon.png";
import video from "./images/video_how_to_teams_icon.png";

export default [
  {
    id: "1",
    title: "Comment utiliser le système de vidéoconférence",
    type: "how to? ",
    img: file,
    //img: "",
    lien: "https://qrti.bnc.ca/media_content/Fr/Etapes_pour_utilisation_MTR.pdf",
  },
  {
    id: "2",
    title: "Comment se connecter à une rencontre",
    type: "Configuration ",
    img: video,
    lien: "https://qrti.bnc.ca/media_content/Fr/Se_connecter_a_la_rencontre.mp4",
  },
  {
    id: "3",
    title: "Comment éviter les problèmes de son",
    type: "Configuration ",
    img: video,
    lien: "https://qrti.bnc.ca/media_content/Fr/Connecter_son_ordinateur_a_la_salle_en_evitant_tout_probleme_de_son.mp4",
  },
  {
    id: "4",
    title: "Dépannage pour les enjeux fréquents",
    type: "Dépannage ",
    img: file,
    lien: "https://qrti.bnc.ca/media_content/Fr/Problemes_connus_MTR.pdf",
  },
];
