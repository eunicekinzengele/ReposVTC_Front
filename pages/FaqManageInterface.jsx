import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FaqManageInterface() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      question:` Comment puis-je récupérer mes objets perdus ?` ,
      answer:
      `Mise à jour il y a plus d’une semaine
      Si vous oubliez des objets dans le véhicule, ou si c'est le cas des invités pour lesquels vous
      avez fait une réservation, le chauffeur contactera directement les personnes concernées
      pour trouver un moyen de leur remettre leurs affaires. Comme alternative, vous pouvez
      nous appeler pour obtenir de l'aide.
      Si vous n'avez pas encore été contacté au sujet des objets perdus, veuillez nous indiquer les
      détails de votre course et des objets concernés, en nous appelant, en utilisant la
      fonctionnalité de chat ou par e-mail à l'adresse service@kinvtc.com pour que nous puissions
      mettre tout en œuvre pour retrouver vos affaires.` ,
    },
    {
      question: "Que faire si mon chauffeur est en retard ?",
      answer:
        `Mis à jour il y a plus d’une semaine
        Nous mettons tout en œuvre pour honorer vos réservation avec ponctualité. Lors de vos
        demandes de réservation à l’avance, notre équipe initie les préparation du véhicule
        disponible en amont de l’heure prévue de votre prise en charge. Malgré ces précautions, des
        facteurs extérieurs à notre organisation (aléas du trafic, manifestations, intempéries …)
        peuvent contraindre le chauffeur à revoir à la hausse son délai d’arrivée.
        Dans ce contexte, le chauffeur évalue un délai supplémentaire qui vous sera communiqué
        par sms et téléphone.
        Vous pouvez également contacter votre chauffeur depuis son numéro de téléphone afin
        d’obtenir davantage d’informations sur sa position. Si vous avez commandé votre véhicule
        par téléphone, vous pouvez joindre nos équipes au +243 841 211 267.`,
    },
    {
      question: `J’ai reçu un appel direct du chauffeur. Est-ce normal ? Le chauffeur dispose-t-
      il de mon numéro de téléphone ?`,
      answer:
        `Mise à jour il y a un semaine
        Afin d’améliorer votre prise en charge en vous signalant par exemple un problème de
        stationnement, les chauffeurs ont la possibilité de vous contacter par téléphone.
        Cette possibilités leur est uniquement accessible pendant le déroulement de votre course.
        Le chauffeur n’a pas le droit de vous contacter après la course.`,
    },
    {
      question: "Où retrouver mon chauffeur dans les gares, les hôtels et les aéroports ?",
      answer:
      `Mis à jour il y a plus d’une semaine
      Lorsque vous validez votre réservation au départ d’un hôtel ou d’un aéroport, vous pouvez
      choisir un point de rendez-vous. Si vous ne voyez pas votre chauffeur, vous pouvez à tout
      moment le contacter directement via son numéro de téléphone, ou contacter notre service.`,
    },
    {
      question: `Pourquoi me dit-on que l'adresse que j'ai indiquée est introuvable ?`,
      answer:
      `Mis à jour il y a plus d’une semaine
      Il arrive que notre système ne reconnaisse pas une adresse. Nous serons ravis de vous aider
      en pareille circonstance. Il vous suffit de nous envoyer un message en utilisant notre chat
      (soit sur le site web, au bas à droite de la page, soit dans l'application mobile en cliquant "Via
      Chat") et de nous donner les détails de l'adresse concernée. Nous allons prendre les mesures
      qu'il faut pour l'ajouter dans notre système.`,
    },
    {
        question: `Comment puis-je ajouter des arrêts supplémentaires à une réservation pour
        un Transfert aéroport ?`,
        answer:
        `Mis à jour il y a plus d’une semaine
        Vous pouvez demander des arrêts supplémentaires dans le champ « Requêtes Spécifiques »
        / « Notes pour le chauffeur » lorsque vous réservez. Néanmoins, des frais supplémentaires
        peuvent être facturés en raison de la distance ou du temps additionnels qui n&#39;étaient pas
        pris en compte dans le prix affiché.
        Si vous souhaitez faire de nombreux et longs arrêts, nous vous conseillons vivement de faire
        une réservation journalière pour garantir la disponibilité du chauffeur. Vous pouvez faire
        autant d'arrêts que vous le voulez lors d'une course journalière. En indiquant des arrêts dans
        le champ « Requêtes Spécifiques » / « Notes pour le chauffeur », vous aidez le chauffeur à
        préparer l'itinéraire d'avance, ce qui rendra la course encore plus aisée.`,
      },
      {
        question: `Comment puis-je modifier/ annuler ma réservation ?`,
        answer:
        `Mis à jour il y a plus d’une semaine
        Savez-vous que la façon la plus facile et rapide de faire une réservation, de la modifier ou de
        l'annuler est d'utiliser notre site Web ou notre application pour smartphone ? Cela vous
        permet d'avoir l'assurance que tous les détails ont été confirmés immédiatement, au
        meilleur prix proposé. Gardez à l'esprit que nous suivons automatiquement l'arrivée de vos
        vols et nous ajustons l'heure de prise en charge pour que le chauffeur vous attende à votre
        arrivée.
        Nous portons à votre connaissance que toute demande de réservation ou de modification
        d'une réservation, qui est envoyée par téléphone, par e-mail ou un autre canal, donnera lieu
        à des frais supplémentaires qui vous seront facturés.
        Vous pouvez facilement modifier la classe de service, la date, l'heure, l'adresse de prise en
        charge et de destination et d'autres informations. Vous pouvez faire des changements
        jusqu'à une heure avant la prise en charge pour les transfert aéroport, et pour les location
        journalière, vous pouvez le faire jusqu'à 24 heure avant. Par contre, les changements
        spontanés de destination ou l'ajout d'arrêts supplémentaires peuvent entraîner des frais
        supplémentaires pour les transfert aéroport. Il en est de même du dépassement de la
        distance comprise dans une réservation journalière. Les réservations journalière
        
        comprennent 150 km par jour. Par exemple, un jour de réservation comprennent 150 kms,
        trois jours comprennent 450 kms, etc.
        
        Via le site Web
        Cliquez sur « Courses » en haut de la page.
        Sélectionnez la course que vous souhaitez modifier. Une page avec les détails de la course
        s'affichera.
        Cliquez sur « Modifier » dans la section à laquelle vous voulez apporter des modifications.
        Cliquez sur « Modifier » dans la section à laquelle vous voulez apporter des modifications.
        Dans l'application
        Sélectionnez votre prochaine course dans l'écran d’accueil ou allez à la section des « Courses
        » pour choisir l'une de vos prochaines courses.
        Une fois que vous aurez sélectionné une course, les détails de celle-ci s'afficheront. Cliquez
        sur « Modifier » pour iOS, ou sur le symbole du stylo pour Android, dans la section à laquelle
        vous souhaitez apporter des modifications.`,
      },
      {
        question: `Que dois-je faire si j'oublie d'ajouter le numéro de mon vol ?`,
        answer:
        `Mis à jour il y a plus d’une semaine
        Accédez à la page des « Courses » et sélectionnez la réservation à laquelle vous souhaitez
        ajouter le numéro de vol. Cliquez sur « Modifier » dans la section des « Options
        supplémentaires ». Vous pouvez maintenant ajouter ou modifier votre numéro de vol.`,
      },
      {
        question: `Respect &amp; sécurité à bord`,
        answer:
        `Mis à jour il y a plus d’une semaine
        Respect et sécurité de nos passagers et chauffeurs affiliés sont notre priorité, et nous
        mettons tout en œuvre pour les garantir au quotidien. Aussi nous ne tolérons aucun
        comportement inapproprié à bord (comportement agressif, insultant, dangereux, déplacé ou
        intrusif, propos à caractère discriminatoire…), et nous avons pris des mesures en matière de
        suivi qualité pour lutter contre de tels comportements.
        Le suivi qualité
        Nos chauffeurs sont soumis à un examen exigeant d'entrée dans l’entreprise, une
        vérification de leur casier judiciaire ainsi qu'à une formation continue durant tout leur
        parcours professionnel. Chez KIN VTC, nous sélectionnons nos chauffeurs sur la base d'un
        examen complémentaire lors de l’affiliation, et avons mis en place une politique de qualité
        visant l'excellence :
         Adhésion de tous les chauffeurs affiliés à une charte qualité
         Suivi personnalisé et sensibilisation quotidienne des chauffeurs par nos équipes au
        respect scrupuleux de cette charte via entretiens, sessions de formation et mises en
        pratique régulières
         Certification annuelle de notre politique qualité par le Bureau CNPR depuis 2023`,
      },
      {
        question: `Comment signaler un incident ?`,
        answer:
        `Mis à jour il y a plus d’une semaine

        Si vous faites face à un comportement inapproprié à bord d’un véhicule, vous pouvez le
        signaler :
         En nous contactant via ce centre d’aide en cliquant sur "Contact" en haut à droite de
        cette page puis en complétant le formulaire. << Un problème avec ma course " -->
        "Problème de comportement avec mon chauffeur"
         En composant le +243 841 211 267.
        Votre signalement sera traité dans les plus brefs délais. Une enquête interne sera menée par
        nos équipes et pourra aller, selon la gravité des faits, jusqu’à un licenciement du chauffeurs.`,
      },
      {
        question: `Il y a eu un problème avec le comportement du chauffeur ?`,
        answer:
        `Mis à jour il y a plus d’une semaine
        Respect et sécurité de nos passagers sont notre priorité. Nous veillons à ce que nos
        chauffeurs aient un comportement exemplaire en toutes circonstances. Toute attitude
        inappropriée et tout manquement à notre charte qualité par nos chauffeurs font l’objet d’un
        signalement à notre Service Qualité qui prend des mesures adaptées à la situation. Pour
        nous signaler un comportement inapproprié, vous pouvez nous contacter : A tout moment
        via ce centre d’aide.`,
      },
      {
        question: `Le chauffeur a emprunté un itinéraire qui ne me convient pas. Ai-je le droit de
        lui indiquer mon trajet ?`,
        answer:
        `Mis à jour il y a plus d’une semaine
        Si vous souhaitez un trajet particulier, vous pouvez l'indiquer en début de course au
        chauffeur qui se doit de le respecter.
        Si vous n'avez pas indiqué votre itinéraire, le chauffeur doit emprunter le parcours qui lui
        paraît le mieux adapté pour rejoindre l’adresse indiquée en fonction du trafic et des
        éventuels aléas rencontrés sur son trajet.`,
      },
      {
        question: `L’état du véhicule et /ou le service rendu à bord n’était (en) t pas
        satisfaisant(s), Que faire ?`,
        answer:
        `Mis à jour il y a plus d’une semaine
        Tous nos chauffeurs et affiliés se doivent de respecter notre charte qualité par laquelle ils
        s’engagent notamment à :
         Entretenir l’état extérieur de leur véhicule (propreté.
         Nettoyer, ranger et aérer l’habitacle de leur véhicule Avoir une présentation
        vestimentaire adaptée.
         Offrir un service sur mesure (bagage, autoradio…)
        Tout manquement à ces règles fait l’objet d’un signalement à notre Service Qualité qui
        prend des mesures adaptées à la situation.
        Vous pouvez nous signaler tout manquement à ces règles via ce centre d’aide en cliquant sur
        contacter.`,
      },
      
  ];

  return (
    <div className=" py-10 ">
      <div className=" flex justify-center ">
        <h1 className=" w-9/12 text-2xl font-semibold">
          R Questions fréquentes
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
