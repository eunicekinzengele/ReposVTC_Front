import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FaqMyAccountInterface() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      question:` Comment puis-je modifier mon mot de passe ?` ,
      answer:
      `Mise à jour
      Si vous êtes connecté sur le site Web, vous pouvez cliquer sur votre nom dans le coin
      supérieur droit, sélectionner « Profil » et modifier votre mot de passe dans l&#39;aperçu du profil.
      Si vous n'êtes pas connecté ou si vous utilisez l'application, cliquez sur « Mot de passe perdu
      » sur la page de connexion du site web, ou appuyez sur « Mot de passe oublié ? » dans
      l'application, pour qu&#39;un message avec un lien de réinitialisation vous soit envoyé.` ,
    },
    {
      question: "Je n'arrive pas à me connecter à mon compte. Pourquoi?",
      answer:
        `Mise à jour. 
        Vous devez vous assurer de l&#39;exactitude de l&#39;adresse mail renseignée lors de la création de
        votre compte et de la validité de votre mot de passe. Votre compte peut par ailleurs être
        bloqué pour plusieurs raisons :
        Un compte est déjà créé à partir de l’identifiant renseigné (mail ou téléphone ayant déjà
        servi à créer un compte )
        Suspicion de carte de paiement volée
        Utilisation d'une fausse adresse mail
        Un blocage peut aussi se produire après plusieurs tentatives de connexion infructueuses.
        Dans ce cas, relancez la page ou l’application KIN VTC avec une connexion 4G ou WIF. `,
    },
    {
      question: "Je ne parviens pas à récupérer mon mot de passe?",
      answer:
        `Mise à jour
        Sur le site Web ou dans l’application, accédez à la page de connexion et cliquez sur « Mot de
        passe oublié ? ». Pour effectuer la réinitialisation dès maintenant.
        
        Nous vous enverrons un e-mail vous demandant de réinitialiser votre mot de passe.`,
    },
    {
      question: "Comment modifier mon adresse e-mail?",
      answer:
      `Mise à jour.
      Si vous souhaitez modifier l’adresse mail renseignée à la création de votre compte, il est
      nécessaire de se connecter à votre adresse mail et le mot de passe actuellement utilisés
      Sélectionner ensuite la rubrique Mon profil dans le menu en haut à gauche de l’écran
      d’accueil
      Modifier votre adresse mail puis enregistrer en cliquant sur Valider.`,
    },
    {
      question: `Comment sont collectées et traitées mes données personnelles ?`,
      answer:
      `Mise à jour
      Lorsque vous créez votre compte sur l’application KIN VTC, sur kinvtc.comr ou réservez un
      véhicule par téléphone via notre plateforme, vous acceptez nos conditions générales et
      accordez votre consentement pour la collecte et le traitement de certaines de vos données
      personnelles.


      Notre société recueille et traite les informations strictement nécessaires à la réalisation des
      réservations conformément à la réglementation en vigueur (règlement au code numérique
      RGPD du 27 avril 2023 et autres textes législatifs ou réglementaires applicables).
      KIN VTC se réserve la possibilité d'enregistrer et de conserver ces informations à des fins de
      preuve et afin d’optimiser l’efficacité de la gestion des réservations. Sous réserve de votre
      consentement, KIN VTC est susceptible de vous adresser par mail ou sms des offres
      commerciales.


      KIN VTC ne transmet les données à caractère personnel de ses clients à ses prestataires ou
      partenaires que pour les besoins exclusifs de la réalisation et de la facturation des
      réservation ainsi que du suivi de la relation commerciale avec ses clients.`,
    },
    {
      question: `Quelles données personnelles sont recueillies ?`,
      answer:
      `Mise à jour
      Notre société ne recueille que les données strictement nécessaires à la réalisation des
      réservations. Il s’agit des informations suivantes :
       Numéro de téléphone présenté par le client
       Enregistrement de la conversation téléphonique
       Nom et prénom du (des) passager(s) et adresse email
       Détail des données relatives à la course effectuée
       Données de connexion, d’utilisation, de localisation
       Ainsi que les données relatives à la carte de paiement du client (N° de la carte, date
      d'expiration, cryptogramme visuel)`,
    },
    {
      question: `Qu’en est-il de la sécurité et de la confidentialité de mes données
      personnelles ?`,
      answer:
      `Mise à jour
      Notre société met en œuvre d’importants moyens pour assurer la sécurité et la
confidentialité des données personnelles. Des mesures organisationnelles, techniques,
logicielles et physiques en matière de sécurité du numérique sont prises pour protéger les
données personnelles contre les altérations, destructions et accès non autorisés.
toutefois, il est à noter qu’internet n’est pas un environnement complètement sécurisé, et
que notre société ne peut pas garantir la sécurité de la transmission ou du stockage des
informations en ligne.
Dans ce contexte, nous vous invitons aussi à être particulièrement vigilants face aux
nombreuses tentatives d’hameçonnage (plus d’infos dans l’article « Comment se prémunir
contre le phishing ? »).`,
    },
    {
      question: `Comment demander l’accès à mes données personnelles, à leur rectification
      ou leur suppression ?`,
      answer:
      `Mise à jour
      Conformément à la réglementation en vigueur, vous pouvez demander l&#39;accès, la
      rectification, la suppression de vos données personnelles ou vous opposer à leur traitement
      dans les limites prévues par la législation applicable. Pour exercer ces droits, vous pouvez :
       Nous adresser votre demande via ce centre d’aide en cliquant sur &quot;Contact&quot; en haut
      à droite de cette page puis en complétant le formulaire « Mon application et mon
      compte » --> « Gestion de mon compte client »
       Ou adresser un courrier à : KIN VTC Délégué à la protection des données (DPO) –
      144B, Boulevard du 30juin à Kinshasa – Gombe, en joignant à votre demande une
      copie de votre pièce d’identité`,
    },
    {
      question: `Comment se prémunir contre le phishing ?`,
      answer:
      `Mise à jour
      Le phishing (ou hameçonnage) est une technique qui consiste à soustraire vos données
      personnelles via des e-mails ou des sms frauduleux usurpant l’identité d’institutions, de
      sociétés ou de tierces personnes. Les équipes de KIN VTC ne vous demanderont jamais de
      communiquer des informations personnelles relatives à votre compte KIN VTC (mots de
      passe, coordonnées bancaires…). Nous vous recommandons de :
       Ne donner aucune suite à ce type de message
       Ne surtout pas cliquer sur un éventuel lien contenu dans ce type de message
      En cas de doute, vous pouvez nous contacter via ce centre d’aide en cliquant sur &quot;Contact&quot;
      en haut à droite de cette page puis en complétant le formulaire &gt; « Mon application et mon
      compte KIN VTC» --> « Sécurité ».`,
    },
    {
      question: "Je pense que mon compte KIN VTC a été piraté. Comment procéder ?",
      answer:
      `Mise à jour
      Si vous constatez une activité inhabituelle sur votre compte KIN VTC, par exemple des
      modifications d’informations ou des courses commandées dont vous n’êtes pas à l’origine,
      nous vous recommandons de :
       Réinitialiser votre mot de passe si vous ne réussissez plus à vous identifier à votre
      compte
       Faire opposition aux transactions contestées auprès de votre banque
       Contacter, si besoin, nos services via ce centre d’aide en cliquant sur &quot;Contact&quot; en
      haut à droite de cette page puis en complétant le formulaire « Mon application et
      mon compte KIN VTC » --> « Sécurité »
      
      Dans certains cas, votre boîte mail a pu être piratée. Vous pouvez vérifier si vos données
      personnelles ont été compromises à la suite de violations de données en renseignant votre
      adresse mail sur le site de référence en la matière : Have I Been Pwned.
      Nous vous invitons à changer le mot de passe de votre boîte mail et à recréer votre compte
      KIN VTC en renseignant un nouveau mot de passe fort (saisir au moins 8 caractères
      comprenant des majuscules, des minuscules, des chiffres et un ou des caractères spéciaux).
      Vous pourrez alors mettre à jour vos données bancaires.`,
    },
    
  ];

  return (
    <div className=" py-10 ">
      <div className=" flex justify-center ">
        <h1 className=" w-9/12 text-2xl font-semibold">
          Questions fréquentes
        </h1>
      </div>
      <div className=" h-auto py-8 w-full flex justify-center items-center">
        <div className=" border-2 w-9/12 rounded-lg	">
          {data.map((item, i) => (
            <div className=" border-b   w-full py-3">
              <div
                className=" text-sm flex justify-between items-center font-medium px-3 cursor-pointer"
                onClick={() => toggle(i)}
              >
                <h2>{item.question}</h2>
                <span>
                  {selected === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              <div className= {`${i === selected ? "block" : "hidden"} text-black/75 text-sm px-5 py-2`} >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
