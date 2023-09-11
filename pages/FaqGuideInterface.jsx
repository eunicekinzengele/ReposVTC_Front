import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FaqGuideInterface() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      question:` Comment puis-je contacter votre service clientèle ?` ,
      answer:
      `Si vous avez des questions qui sont sans réponses dans le centre d'aide ou si vous avez besoin d'une
      aide supplémentaire, veuillez contacter notre service satisfaction clientèle en utilisant la fonctionnalité
      de chat ou par e-mail à l'adresse service@kinvtc.com Nous pouvons toujours vous recontacter par
      téléphone, au cas où votre requête est plus complexe. +243'841'211 267` ,
    },
    {
      question: `Que se passe-t-il si j’ai plus de bagages que la limite comprise dans ma
      réservation ?`,
      answer:
        `Le nombre de bagages maximal indiqué pour toutes les réservations est basée sur des précautions
        de sécurité. Nous vous conseillons donc de ne pas dépasser cette limite. Si vous voyagez avec plus
        de bagages que la limite, assurez-vous de réserver assez de véhicules pour pouvoir transporter toutes
        vos affaires, afin de ne pas avoir à dépasser le maximum autorisé.
        Sur la base des bagages supplémentaires, les chauffeurs se réservent le droit de refuser de vous
        embarqué à bord du véhicule. En outre, les bagages supplémentaires à la limite peuvent donner lieu
        à des frais additionnels.`,
    },
    {
      question: `Que se passe-t-il si ma course journalière prend fin hors de la ville
      dans laquelle elle a commencé ?`,
      answer:
        `Si votre réservation journalière prend fin dans une autre ville, on vous facturera la distance
        supplémentaire parcourue par le chauffeur pour retourner à la ville de départ.`,
    },
    {
      question: "Est-il autorisé de fumer dans le véhicule ?",
      answer:
      `Pour préserver la propreté et la qualité de l&#39;air pour tous nos invités, il n&#39;est pas permis de fumer dans
      les véhicules. Cela inclut les cigarettes, les cigarettes électroniques, les cigares et tous les autres
      produits à base de tabac ou non, que les gens fument.
      La violation de cette disposition peut entraîner des frais supplémentaires.`,
    },
    {
      question: `Combien d'invités pouvez-vous transporter ?`,
      answer:
      `Vous n’avez pas besoin de vous inquiéter si vous mettez plus de
      temps que prévu pour Rejoindre votre chauffeur. Chaque transfert
      depuis l’aéroport est accompagné d’un temps D’attente gratuit
      pouvant aller jusqu’à 60 minutes selon la classe de véhicule
      choisi. Lors deréservation.`,
    },
    {
        question: `Comment puis-je déterminer la capacité du véhicule en matière de bagages ?`,
        answer:
        `Vous pouvez voir la capacité de chaque catégorie de véhicule en matière de bagages lors de la
        réservation. Celle-ci est marquée près du symbole avec un sac. Vous verrez aussi le nombre de
        personnes que chaque catégorie de véhicule peut transporter.`,
      },
      {
        question: `Puis-je emporter des aliments et des boissons dans la voiture ?`,
        answer:
        `Nous tenons à préserver la propreté de nos véhicules, raison pour laquelle nous n&#39;encourageons pas
        la consommation de nourriture lors des courses.
        La consommation des boissons alcoolisées dans la voiture n'est possible qu'avec un consentement
        préalable et une autorisation des autorités locales. Si l'invité devient ivre, le chauffeur peut lui
        demander d'arrêter de boire, et si sa situation compromet la sécurité de la course, le chauffeur peut
        mettre fin à la course.
        Des frais supplémentaires peuvent être appliqués si le véhicule doit être nettoyé parce que des
        aliments ou des boissons y ont été renversés.`,
      },
      {
        question: `Comment demander un service qui comprend le transport d'un
        animal d'assistance ou de compagnie ?`,
        answer:
        `Veuillez indiquer les informations concernant l'animal et le nombre de passagers dans le champ des «
        Requêtes Spécifiques » lors de la réservation.
        
        Transporter des animaux sans les signaler lors de la réservation avec KIN VTC peut entraîner des
        frais supplémentaires
        Nos chauffeurs ont le droit de refuser de transporter un animal qui n'a pas été approuvé au préalable
        et ajouté dans le champ des Requêtes spécifiques lors de la réservation. Cela inclut également les
        animaux qui ne sont pas transportés dans une boîte de transport fermée et adéquate. Les animaux
        d'assistance sont une exception en la matière. Pour ces derniers, nous vous demandons de fournir les
        informations dans les Requêtes Spécifiques et aussi de vous préparer à fournir des documents au
        chauffeur, au besoin.`,
      },
      {
        question: `Où puis-je trouver des rabais et des réductions ?`,
        answer:
        `Toutes les promotions, coupons et offres de réduction seront communiqués par messages
        électroniques directs ou sur les réseaux sociaux tels que Facebook, Twitter, etc.
        Nous ne pouvons pas proposer actuellement de rabais ou de réduction par téléphone ou d'autres
        canaux de communication.`,
      },
      {
        question: `Quelles sont les villes dans lesquelles KIN VTC propose ses services ?`,
        answer:
        `Nous sommes actuellement que dans la ville de Kinshasa.`,
      },
      {
        question: `Quels sont les véhicules utilisés par KIN VTC ?`,
        answer:
        `Nos véhicules son regroupée en 4 types : Berlines, SUV, Van et Bus. Pour toutes nos modèles et
        catégorie de véhicules, une liste de véhicules approuvés existe. Par exemple, cela peut inclure :
         Berlines: Toyota Corolla, , Audi A6, Cadillac XTS ou similaire
         SUV: Toyota Fortuner, Toyota Prado TX, TXL, VX, Land Cruiser 300 ou similaire
         Van: Toyota Noah, Hyundai H1, Toyota Alphard, ou similaire
         Bus : Toyota Hiace, Toyota Coaster, ou similaire
        Les images présentées lors de la réservation sont à but illustratif. Les véhicules qui seront réellement
        utilisés peuvent être l'un ou l'autre de ceux indiqués ci-dessus.
         
        Nous ne pouvons donner de garantie quant à l'utilisation d'un modèle de véhicule ou d'une couleur en
        particulier, car les véhicules utilisés sont soumis à la disponibilité.`,
      },
      {
        question: `Quels canaux puis-je utiliser pour réserver, modifier ou annuler une
        course ?`,
        answer:
        `Savez-vous que la façon la plus facile et rapide de faire une réservation, de la modifier ou de l'annuler
        est d'utiliser notre site Web ou notre application pour smartphone ? Cela vous permet d'avoir
        l'assurance que tous les détails ont été confirmés immédiatement, au meilleur prix proposé.
        Gardez à l'esprit que nous suivons automatiquement l'arrivée de vos vols et nous ajustons l'heure de
        prise en charge pour que le chauffeur vous attende à votre arrivée. Nous portons à votre
        connaissance que toute demande de réservation ou de modification d'une réservation, qui est
        envoyée par téléphone, par e-mail ou un autre canal, donnera lieu à des frais supplémentaires qui
        vous seront facturés.`,
      },
      {
        question: `Combien de temps à l'avance puis-je réserver une course ?`,
        answer:
        `Vous pouvez réserver des courses à l'avance ou moins 60 minutes avant l'heure où vous en aurez
        besoin. Nous vous conseillons de faire votre réservation avec le plus d'avance possible.
        Pour les Transfert aéroport, vous pouvez faire des modifications ou des annulations gratuitement
        jusqu'à une heure avant l'heure de prise en charge. Pour les réservations par journalière, vous pouvez
        apporter des modifications ou annuler la course gratuitement jusqu'à 24 heures avant l'heure de prise
        en charge.`,
      },
      {
        question: `Comment puis-je réserver une course ?`,
        answer:
        `Différentes méthodes de réservation sont offertes, parmi lesquelles vous pouvez choisir celle qui vous
        convient le mieux. Vous pouvez faire une réservation pour votre propre compte ou pour une tierce
        personne via : 
        
         notre site Web, https://kinvtc.com
         l'application KIN VTC pour iOS ou Android
        Vous voulez consulter un guide étape par étape sur la façon de réserver une course ? Vous pouvez y
        accéder ici`,
      },
      {
        question: `Comment recevrai-je la confirmation de ma réservation ?`,
        answer:
        `Les confirmations sont envoyées directement par e-mail après la réservation.`,
      },
      {
        question: `Pendant combien de temps le chauffeur m'attendra-t-il ?`,
        answer:
        `Pour les Transfert Aéroport ; une prise en charge (à partir d'un hôtel ou d'une adresse de domicile),
        votre chauffeur vous attendra pendant 30 minutes avant de quitter le point de prise en charge. Les 15
        premières minutes sont offertes. Nous ne vous facturerons que les 15 minutes restantes. Si vous vous
        doutez à l'avance que vous serez en retard, nous vous conseillons de nous contacter par chat pour
        que nous trouvions une solution alternative.
        Pour les prises en charge à l'aéroport et dans les gares ferroviaires, une heure d'attente gratuite est
        offerte. Le chauffeur attendra pendant cette durée avant de quitter le point de prise en charge. Si vous
        fournissez le numéro de votre vol ou de votre train au chauffeur, il pourra suivre l'heure d'arrivée et
        ajuster l'heure de prise en charge, en cas de retard ou d'arrivée à l'avance (si possible). Si vous serez
        très en retard de sorte que le chauffeur ne pourra pas vous attendre, nous vous contacterons pour
        trouver ensemble une solution alternative.`,
      },
      {
        question: `Combien de kilomètres ou de miles sont inclus dans une
        réservation journalière ?`,
        answer:
        `La plupart des réservations comprennent 150 kilomètres (12,4 miles) de distance gratuite pour chaque
        jour de réservation réservée, peu importe la catégorie du véhicules. Par exemple, une réservation de
        1 jour inclura 150 kilomètres (241,93 miles). En raison de la taille de de la villes de Kinshasa, des
        kilomètres ou miles supplémentaires par jour y sont offerts. La distance gratuite exacte est indiquée
        dans l'aperçu de la réservation.
        Si vous dépassez la distance offerte, des frais supplémentaires par kilomètre seront appliqués. Le
        montant est fonction de catégorie du véhicule.`,
      },
      {
        question: `Comment puis-je appliquer un code promotionnel ?`,
        answer:
        `Vous pouvez ajouter un code promotionnel lors de la réservation. Notez qu'il est impossible
        d'appliquer un code promotionnel à une course déjà effectuée.
        Via kinvtc.com
        Sur la dernière page de la réservation, cliquez sur « Vous avez un code promotionnel ? »
        Saisissez votre code et cliquez sur « Utiliser ».
        Via l'application
        Sur la page de confirmation pendant la réservation, appuyez sur « Ajouter un coupon » sur iOS, ou
        sur le symbole « ⋮ » en haut de la page pour Android, avant d'appuyer sur « Ajouter un coupon ».
        Saisissez votre code promotionnel et confirmez.`,
      },
      {
        question: `Que puis-je demander dans le champ des « Requêtes Spécifiques »
        / « Notes pour le chauffeur » ?`,
        answer:
        `demandes supplémentaires concernant votre service. Veuillez ajouter ces informations en anglais.
        Si vous voyagez avec un appareil d'assistance, veuillez l'indiquer dans le champ pour que nous
        prenions les dispositions pour mieux vous servir. N'oubliez pas de spécifier les dimensions de
        l'appareil, en particulier s'il est volumineux, comme des fauteuils roulants pliables, pour que nous
        vérifions que l'appareil peut trouver sa place dans le véhicule.
        Toute information supplémentaire utile pour votre course peut être incluse, telle que « veuillez
        attendre à l'extérieur de la maison » ou « l'entrée de la maison se trouve à la prochaine rue, au 3 rue
        Muster ».
        Si vous savez d'avance que vous ferez des arrêts supplémentaires lors de votre trajet, nous vous
        recommandons vivement de faire une réservation journalière qui vous permet de faire autant d'arrêts
        que vous le souhaitez. L'autre option consiste à le signaler dans le champ des Requêtes Spécifiques
        
        pour que le chauffeur y soit préparé. Le temps d'attente ou la distance supplémentaire peut tout de
        même entraîner des coûts supplémentaires.
        La satisfaction des requêtes est soumise à la capacité et la disponibilité.
        Les requêtes suivantes ne peuvent pas être satisfaites :
        véhicules, modèles ou couleurs spécifiques
        un chauffeur spécifique
        Wi-Fi à bord garanti`,
      },
      {
        question: `Des mineurs non accompagnés peuvent-ils se déplacer avec KIN
        VTC ?`,
        answer:
        `Non. Tous les enfants et les mineurs doivent être accompagnés par un adulte pour la durée du trajet.`,
      },
      {
        question: `Puis-je obtenir des points de fidélité en utilisant les services de KIN
        VTC ?`,
        answer:
        `Vous pouvez gagner des points de fidélité pour chaque course que vous effectuez. Vous devez
        seulement choisir votre programme de fidélité préféré et saisir le numéro de votre programme de
        fidélité lors de la réservation. Vous pouvez aussi choisir de l'ajouter à votre profil pour qu'il soit
        automatiquement appliqué lors de vos prochaines réservations. Vous pouvez ajouter, modifier ou
        supprimer les informations de votre programme à tout moment. Vous pouvez en apprendre davantage
        sur nos programmes de fidélité ici.`,
      },
      {
        question: `Que faire si j'ai un appareil d'assistance ?`,
        answer:
        `C'est avec plaisir que nous accueillons des invités qui ont des appareils d'assistance. Il vous suffit de
        nous signaler l'appareil d'assistance dans le champ « Requêtes Spécifiques »/« Notes pour le
        chauffeur » lors de la réservation. N'oubliez pas de spécifier les dimensions de l'appareil, en particulier
        s'il est volumineux, comme des fauteuils roulants pliables, pour que le chauffeur s'assure que
        l'appareil peut trouver sa place dans le coffre du véhicule.`,
      },
      {
        question: `De quelles couleurs sont les véhicules ?`,
        answer:
        `Pour le certain modèles , nous utilisons les véhicules blancs et argentés car ils sont plus adaptés au
        climat et préférences locales, mais pour d’autre modèles, nous utilisons uniquement des véhicules
        noirs.`,
      },
      {
        question: `Que se passe-t-il si je veux réserver un Van/SUV, mais qu'il y aura
        plus de 5 passagers ?`,
        answer:
        `En règle générale, si vous voyagez avec 6 passagers ou plus, nous vous conseillons vivement de
        réserver plus d'un véhicule. Même si certains de nos véhicules peuvent transporter plus de
        personnes, nous pouvons seulement garantir une capacité de 5 invités pour les réservation en
        Van/SUV].
        Si vous souhaitez avoir plus d'invités dans le même véhicule, spécifiez le nombre d'invités et de
        bagages (sac à main, bagages de soute) dans le champ des « Requêtes Spécifiques »/ « Notes pour
        le chauffeur » pendant la réservation. Veuillez prendre note que cela ne constitue pas une garantie
        que votre requête sera satisfaite, car cela dépend de la disponibilité de véhicules plus spacieux. Si
        des véhicules suffisamment spacieux ne sont pas disponibles, vous serez contacté par notre équipe et
        informé de la meilleure solution.`,
      },
      {
        question: `Comment dois-je choisir l'heure de prise en charge à l'aéroport ?`,
        answer:
        `Voyagez-vous à l'intérieur du même pays ou à l'international ? Si vous devez passer les contrôles
        d'immigration et douaniers, le temps d'attente peut varier en fonction de l'origine du voyage. À titre
        d'illustration, le temps d'ttente pour les vols nationaux est plus long que pour les vols internationaux.
        Selon que vous voyagez avec un bagage à main (sac/sacs) ou un bagage en soute, le temps d'attente
        peut également varier. Pour les vols internationaux, nous recommandons une heure de décalage
        entre l'heure d'arrivée et l'heure de prise en charge.
        Pour faire face aux retards imprévus, toutes les prises en charge à l'aéroport comprennent une heure
        d'attente gratuite. En outre, si vous fournissez les détails de votre vol lors de la réservation, nous
        suivrons l'heure d'arrivée et ajusterons l'heure de prise en charge en conséquence. Si vous serez très
        
        en retard de sorte que le chauffeur ne pourra pas vous attendre, nous vous contacterons pour trouver
        ensemble une solution alternative.`,
      },
      {
        question: `Dois-je préciser le terminal d'arrivée pour les prises en charge à
        l'aéroport ?`,
        answer:
        `Non. Il vous suffit d'indiquer l'aéroport comme point de prise en charge et de saisir le numéro du vol
        lorsqu'on vous le demande. Nous suivrons votre vol et vous accueillerons au terminal d'arrivée.
        Si vous indiquez le terminal d'arrivée comme point de prise en charge, la course peut ne pas être
        identifiée comme une prise en charge à l'aéroport. Dans ce cas, on ne vous demandera pas de saisir
        le numéro du vol, et le temps d'attente gratuit sera de 15 minutes, au lieu des 60 minutes prévus pour
        les prises en charge à l'aéroport.`,
      },
      {
        question: `Où le chauffeur m'accueillera-t-il, au Beach Ngobila?`,
        answer:
        `Pour les prises en charge au beach Ngobila, Si nécessaire, l'invité peut toujours appeler le chauffeur
        pour convenir d'un autre lieu de prise en charge (les informations de contact sont envoyées par e-mail
        et SMS environ une heure avant la prise en charge).`,
      },
      {
        question: `Où le chauffeur m'accueillera-t-il à l'aéroport ?`,
        answer:
        `Toutes les prises en charge à l'aéroport comprennent un service d'accueil gratuit. Le chauffeur vous
        attendra à la sortie après la récupération des bagages avec une pancarte personnalisée pour la prise
        charge. Pour les prises en charge dans un point de rencontre différent, le lieu sera indiqué dans l'e-mail de confirmation de réservation.`,
      },
      {
        question: `Pourquoi dois-je indiquer le numéro du vol ?`,
        answer:
        `Le numéro du vol nous permet de suivre le statut de votre vol et d'ajuster l'heure de prise en charge,
        en tenant compte des arrivées tardives ou en avance (si possible), ainsi que de nous assurer que le
        chauffeur attende au bon moment.`,
      },
      {
        question: `Que se passe-t-il si mon vol prend du retard ?`,
        answer:
        `Veuillez indiquer le numéro de vol lors de la réservation d'une prise en charge à l'aéroport. Nous
        suivrons le statut et ajusterons l'heure de prise en charge en tenant compte des arrivées tardives et en
        avance (si possible).
        Par exemple, si votre vol doit arriver à 18 h 00 et vous avez réservé une course pour 18 h 30, mais
        entre-temps, il s'avère que votre vol aura une heure de retard et doit arriver à 19 h 00, nous fixerons
        automatiquement l'heure de prise en charge à 19 h 30.`,
      },
      {
        question: `Le Wi-Fi est-il disponible dans les véhicules ?`,
        answer:
        `Certains véhicules en disposent, mais il ne s'agit pas encore d'une offre disponible dans toute notre
        flotte. Nous avons entamé un processus d'intégration pour un accès à Internet facile dans toute notre
        flotte. Si cela vous importe, vous pouvez en faire la demande dans le champ « Requêtes Spécifiques
        », mais nous ne pouvons pas garantir que vous aurez effectivement accès à Internet.`,
      },
      {
        question: `Quel type de formation reçoivent les chauffeurs de KIN VTC?`,
        answer:
        `Tous nos chauffeurs disposent des permis requis pour fournir des services de ce type. Nous avons
        également un programme de formation interne que doivent suivre tous les chauffeurs afin de pouvoir
        effectuer des courses.
        Notre système de soumission d'avis et commentaires permet de nous assurer que nos chauffeurs
        respectent nos normes et exigences strictes. Cela inclut la fiabilité, la sécurité, l'apparence
        professionnelle, les compétences linguistiques et la convivialité.`,
      },
      {
        question: `Quels sont les langues parlées par les chauffeurs ?`,
        answer:
        `Tous nos chauffeurs parlent la langue française ainsi que la langue locale du pays.`,
      },
      {
        question: `Comment puis-je contacter mon chauffeur ?`,
        answer:
        `Le nom du chauffeur et son numéro de téléphone seront envoyés à l'invité par e-mail et SMS,
        une heure avant la prise en charge. Pour raison de confidentialité entre l'invité et le chauffeur,
        cette information ne peut pas être transmise plus tôt.
        Veuillez contacter directement le chauffeur en utilisant son numéro de téléphone, car les
        réponses au message que nous vous envoyons sont reçues par notre système et non le
        chauffeur.`,
      },
      {
        question: `Quand recevrai-je les informations de contact du chauffeur ?`,
        answer:
        `Le nom du chauffeur et son numéro de téléphone seront envoyés à l'invité par e-mail et SMS, une
        heure avant la prise en charge. Si vous faites une réservation pour une tierce personne, les
        informations de contact seront envoyés à l'adresse e-mail et le numéro de téléphone qui ont été
        fournis lors de la réservation.`,
      },
      {
        question: `À qui puis-je envoyer une demande de proposition ?`,
        answer:
        `Mon organisation procédera à une demande de propositions pour un service de transport avec
        chauffeur.
        À qui dois-je m'adresser ?
        Veuillez envoyer vos documents à l'adresse conttact@kinvtc.com .`,
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
