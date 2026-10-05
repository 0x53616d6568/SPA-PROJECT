import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'ar';
const LANGUAGE_KEY = 'stillroom-language';

const translations: Record<Exclude<Language, 'en'>, Record<string, string>> = {
  fr: {
    Home:'Accueil', Treatments:'Soins', 'Visit information':'Informations pratiques', Staff:'?quipe', 'Sign out':'D?connexion', 'Sign in':'Connexion', 'Find a time':'Choisir un horaire', 'Book an appointment':'Prendre rendez-vous', 'Open menu':'Ouvrir le menu', 'Close menu':'Fermer le menu', 'Switch to light mode':'Passer au th?me clair', 'Switch to dark mode':'Passer au th?me sombre', 'Demo setup':'D?mo', 'Welcome back':'Ravi de vous revoir', 'Sign in for your Stillroom account':'Connectez-vous ? votre compte Stillroom', 'Make room for you':'Faites-vous une place', 'Create your Stillroom account':'Cr?ez votre compte Stillroom',
    'A NEIGHBORHOOD PAUSE':'UNE PAUSE DANS LE QUARTIER', 'A little room to breathe.':'Un instant pour respirer.', 'A neighborhood place to set the day down for a while.':'Un lieu de quartier pour faire une pause dans la journ?e.', 'FIND YOUR WAY':'NOS PAGES', Privacy:'Confidentialit?', 'Owner access':'Espace responsable', 'DEMO CONTACT':'CONTACT D?MO', 'Address loading':'Chargement de l?adresse', 'Seed setup placeholders':'Exemples de d?monstration ? remplacez-les par les informations de votre ?tablissement.',
    'YOUR NEIGHBORHOOD RESET':'VOTRE PAUSE DE QUARTIER', 'Make a little':'Offrez-vous', 'room for':'un instant', 'you.':'? vous.', 'A considered pause in the middle of everything. Choose a treatment, find a time, and let the outside world wait a moment.':'Une pause au milieu du quotidien. Choisissez un soin, trouvez un horaire et laissez le monde attendre un peu.', 'Book your visit':'R?server votre visite', 'Explore treatments':'D?couvrir les soins', 'A calm place, close to home':'Un lieu paisible pr?s de chez vous', 'THE STILLROOM WAY':'L?ESPRIT STILLROOM', 'A slower hour can change the shape of a day.':'Une heure plus calme peut changer toute une journ?e.', PAUSE:'PAUSE', HERE:'ICI', 'A GOOD PLACE TO BEGIN':'POUR BIEN COMMENCER', 'Time that feels like yours.':'Un moment rien qu?? vous.', 'See every treatment':'Voir tous les soins', 'Loading the treatment menu':'Chargement des soins', 'Treatments are being set up. Please check back soon.':'Les soins sont en pr?paration. Revenez bient?t.', 'Thoughtfully simple, from hello to see-you-soon.':'Tout en douceur, de votre arriv?e ? votre d?part.', 'THE VISIT, AT YOUR PACE':'VOTRE VISITE, ? VOTRE RYTHME', 'YOUR TIME, YOUR WAY':'VOTRE TEMPS, ? VOTRE FA?ON', 'A softer rhythm starts before you arrive.':'Un rythme plus doux commence avant votre arriv?e.', 'Browse what feels right, book without creating an account, and arrive knowing what to expect. Simple, clear, and made around your day.':'Choisissez ce qui vous convient, r?servez sans compte et arrivez en toute s?r?nit?. Simple, clair et adapt? ? votre journ?e.', 'Find a time online':'Choisir un horaire en ligne', 'Availability updates from our live schedule.':'Les disponibilit?s suivent le planning en direct.', 'A warm welcome':'Un accueil chaleureux', 'Share a note for the team when you book.':'Laissez un mot ? l??quipe lors de votre r?servation.', 'Plan a visit':'Pr?parer une visite', 'GOOD TO KNOW':'? SAVOIR', 'A few details, before you book.':'Quelques informations avant de r?server.', 'Read visit information':'Lire les informations pratiques',
    'THE TREATMENT MENU':'LA CARTE DES SOINS', 'Find your kind of pause.':'Trouvez votre moment de d?tente.', 'Each visit has its own pace. Explore the current menu, and choose the time that works for you.':'Chaque visite a son propre rythme. D?couvrez nos soins et choisissez l?horaire qui vous convient.', All:'Tout', 'Loading treatments':'Chargement des soins', 'The menu is taking shape.':'La carte se pr?pare.', 'No treatments are available for this selection right now.':'Aucun soin ne correspond ? cette s?lection.', FEATURED:'? LA UNE', Duration:'Dur?e', Price:'Prix', minutes:'minutes', 'All treatments':'Tous les soins', 'A MOMENT FOR YOU':'UN MOMENT POUR VOUS', DURATION:'DUR?E', PRICE:'PRIX', 'demo setup price':'prix indicatif', 'Find a time for this treatment':'Choisir un horaire pour ce soin',
    'BOOK WITHOUT AN ACCOUNT':'R?SERVER SANS COMPTE', 'Make it your time.':'Accordez-vous ce moment.', 'Choose a service and available time, then leave the rest to us.':'Choisissez un soin et un horaire disponible, nous nous occupons du reste.', 'Choose a treatment':'Choisir un soin', 'Select a treatment':'S?lectionner un soin', 'Pick a day & time':'Choisir un jour et un horaire', 'Your details':'Vos coordonn?es', 'Full name':'Nom complet', 'Email address':'Adresse e-mail', 'Phone number':'T?l?phone', 'A note for our team':'Un mot pour notre ?quipe', '(optional)':'(facultatif)', 'I have read and accept the':'J?ai lu et j?accepte la', 'visit and cancellation policy':'politique de visite et d?annulation', 'Confirm appointment':'Confirmer le rendez-vous', 'Checking and booking?':'V?rification et r?servation?', 'Loading current treatments?':'Chargement des soins?', 'Could not load treatments ? retry':'Impossible de charger les soins ? r?essayer', 'Choose a treatment to continue.':'Choisissez un soin pour continuer.', 'Choose an available appointment time.':'Choisissez un horaire disponible.', 'Enter your name so the team knows who to welcome.':'Indiquez votre nom pour que l??quipe puisse vous accueillir.', 'Enter a valid email address.':'Saisissez une adresse e-mail valide.', 'Enter a phone number with at least 7 digits.':'Saisissez un num?ro de t?l?phone d?au moins 7 chiffres.', 'Please accept the visit policy to continue.':'Veuillez accepter la politique de visite pour continuer.', 'Choose another available appointment time.':'Veuillez choisir un autre horaire disponible.', 'The booking details could not be loaded.':'Impossible de charger les d?tails de r?servation.', 'Your booking could not be completed. Please try again.':'La r?servation a ?chou?. Veuillez r?essayer.', 'YOUR VISIT':'VOTRE VISITE', 'Treatment summary':'R?sum? du soin', 'Choose a date':'Choisir une date', 'Choose a time':'Choisir un horaire', 'No account needed. Your request is checked against live availability when you confirm.':'Aucun compte n?cessaire. Les disponibilit?s sont v?rifi?es au moment de la confirmation.',
    'Booking history':'Historique des rendez-vous', 'Saved details':'Coordonn?es enregistr?es', Profile:'Profil', History:'Historique', 'Quick actions':'Actions rapides', 'New visit':'Nouveau rendez-vous', 'No bookings yet. Your upcoming and past appointments will appear here once you book a visit.':'Aucun rendez-vous. Vos visites appara?tront ici apr?s votre r?servation.', 'Manage your visit.':'G?rer votre visite.', 'Cancel appointment':'Annuler le rendez-vous', 'Cancelling?':'Annulation?', 'Book another visit':'R?server une autre visite', 'Audit trail.':'Journal d?activit?.', 'Recent events':'?v?nements r?cents', 'Search events':'Rechercher des ?v?nements', 'All records':'Tous les ?l?ments', 'All actors':'Tous les acteurs', Guests:'Clients sans compte', 'Customer accounts':'Comptes clients', 'Staff / admins':'?quipe / administration', 'Nothing to show yet.':'Rien ? afficher pour le moment.',
    'Discount percentage':'Pourcentage de remise', Overview:'Vue d?ensemble', Customers:'Clients', 'Audit logs':'Journaux d?audit', 'People & access':'Personnes et acc?s', 'Customer records':'Dossiers clients', 'Account type':'Type de compte', 'All customers':'Tous les clients', 'With an account':'Avec un compte', Guest:'Sans compte', 'Customer account':'Compte client', 'Search staff accounts':'Rechercher dans les comptes ?quipe', 'Treatment catalog':'Catalogue des soins', Services:'Soins', 'New treatment':'Nouveau soin', 'Save changes':'Enregistrer les modifications', 'Create treatment':'Cr?er le soin', 'Manager access required.':'Acc?s responsable requis.', 'Sign in to continue.':'Connectez-vous pour continuer.', 'Your spa workspace.':'Votre espace de travail.',
    Language:'Langue', French:'Fran?ais', Arabic:'Arabe', Connecting:'Connexion en cours', 'Service status unavailable':'?tat du service indisponible', Online:'En ligne', 'Today?s schedule':'Planning du jour', 'Today, at a glance.':'La journ?e en un coup d??il.', 'Staff desk':'Espace ?quipe', 'Manage the schedule, people, treatment catalog, and operational history.':'G?rez le planning, l??quipe, les soins et l?historique des op?rations.', 'CUSTOMER RECORDS':'DOSSIERS CLIENTS', NAME:'NOM', EMAIL:'E-MAIL', PHONE:'T?L?PHONE', ACCOUNT:'COMPTE', ACTION:'ACTION', Edit:'Modifier', 'Edit customer':'Modifier le client', Cancel:'Annuler', Save:'Enregistrer', 'Display name':'Nom affich?', 'Account email':'E-mail du compte', 'New password (optional)':'Nouveau mot de passe (facultatif)', 'Temporary password':'Mot de passe temporaire', 'Short bio':'Courte pr?sentation', 'Available for bookings':'Disponible pour les rendez-vous', 'Disable sign-in account':'D?sactiver le compte', 'Save account changes':'Enregistrer les modifications', 'No sign-in account':'Aucun compte de connexion', Bookable:'R?servable', 'Not bookable':'Non r?servable', Active:'Actif', Disabled:'D?sactiv?', 'STAFF ACCOUNTS':'COMPTES ?QUIPE', 'Loading staff accounts':'Chargement des comptes ?quipe', 'Loading customers':'Chargement des clients', 'Loading events':'Chargement des ?v?nements', 'Could not load audit events.':'Impossible de charger le journal.', 'We couldn?t reach the schedule.':'Impossible de joindre le planning.', 'Please try again in a moment.':'Veuillez r?essayer dans un instant.', 'Try again':'R?essayer', 'Gathering the details':'Chargement des informations', 'Delete treatment':'Supprimer le soin', 'Edit treatment':'Modifier le soin', 'Treatment name':'Nom du soin', Category:'Cat?gorie', Description:'Description', Featured:'? la une', 'All statuses':'Tous les statuts', 'Search this list':'Rechercher dans la liste', 'Add staff':'Ajouter un membre', 'Sign-in email':'E-mail de connexion', 'Cancel password change':'Annuler le changement du mot de passe', 'Change password':'Changer le mot de passe', 'New password (15+ characters)':'Nouveau mot de passe (15 caract?res ou plus)', 'Only needed for a new account (15+ characters)':'Requis uniquement pour un nouveau compte (15 caract?res ou plus)', 'User / Customer':'Utilisateur / Client', 'Manager / Staff':'Responsable / ?quipe', 'Admin / Owner':'Admin / Propri?taire', 'EDIT STAFF ACCOUNT':'MODIFIER LE COMPTE ?QUIPE', 'CREATE STAFF ACCOUNT':'CR?ER UN COMPTE ?QUIPE', 'Full platform access, including manager accounts, roles, permissions, settings, and audit logs.':'Acc?s complet ? la plateforme, aux comptes responsables, aux r?les, autorisations, param?tres et journaux.', 'Day-to-day bookings, services, staff schedules, customers, and reports, with limited settings and business audit access. Cannot manage manager/admin accounts or change roles.':'Gestion des rendez-vous, soins, plannings, clients et rapports, avec acc?s limit? aux param?tres et journaux. Ne peut pas g?rer les comptes responsables ou administrateurs, ni modifier les r?les.', 'Public services, own profile and customer record, own bookings, and account deletion requests.':'Soins publics, profil, dossier client et rendez-vous personnels, et demandes de suppression du compte.', 'Choose what this account can access. Changing the role loads its default permissions.':'Choisissez les acc?s de ce compte. Le changement de r?le charge les autorisations par d?faut.', 'EDIT TREATMENT':'MODIFIER LE SOIN', 'NEW TREATMENT':'NOUVEAU SOIN', 'Short description':'Description courte', 'Full description':'Description compl?te', 'Treatment image URL':'URL de l?image du soin', 'Feature on home page':'Mettre en avant sur la page d?accueil', 'STAFF DESK':'ESPACE ?QUIPE', 'Request could not be completed.':'La demande n?a pas abouti.'
  },
  ar: {
    "Home": "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
    "Treatments": "\u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a",
    "Visit information": "\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0632\u064a\u0627\u0631\u0629",
    "Staff": "\u0627\u0644\u0645\u0648\u0638\u0641\u0648\u0646",
    "Sign out": "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c",
    "Sign in": "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",
    "Find a time": "\u0627\u062e\u062a\u0631 \u0645\u0648\u0639\u062f\u064b\u0627",
    "Book an appointment": "\u0627\u062d\u062c\u0632 \u0645\u0648\u0639\u062f\u064b\u0627",
    "Open menu": "\u0627\u0641\u062a\u062d \u0627\u0644\u0642\u0627\u0626\u0645\u0629",
    "Close menu": "\u0623\u063a\u0644\u0642 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",
    "Switch to light mode": "\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0627\u062a\u062d",
    "Switch to dark mode": "\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062f\u0627\u0643\u0646",
    "Demo setup": "\u0646\u0633\u062e\u0629 \u062a\u062c\u0631\u064a\u0628\u064a\u0629",
    "Welcome back": "\u0645\u0631\u062d\u0628\u064b\u0627 \u0628\u0639\u0648\u062f\u062a\u0643",
    "Sign in for your Stillroom account": "\u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0625\u0644\u0649 \u062d\u0633\u0627\u0628 Stillroom",
    "Make room for you": "\u0627\u0645\u0646\u062d \u0646\u0641\u0633\u0643 \u0645\u0633\u0627\u062d\u0629",
    "Create your Stillroom account": "\u0623\u0646\u0634\u0626 \u062d\u0633\u0627\u0628\u0643 \u0641\u064a Stillroom",
    "A NEIGHBORHOOD PAUSE": "\u0627\u0633\u062a\u0631\u0627\u062d\u0629 \u0641\u064a \u0627\u0644\u062d\u064a",
    "A little room to breathe.": "\u0645\u0633\u0627\u062d\u0629 \u0635\u063a\u064a\u0631\u0629 \u0644\u0644\u062a\u0646\u0641\u0633.",
    "A neighborhood place to set the day down for a while.": "\u0645\u0643\u0627\u0646 \u0642\u0631\u064a\u0628 \u0644\u062a\u0636\u0639 \u0623\u0639\u0628\u0627\u0621 \u064a\u0648\u0645\u0643 \u062c\u0627\u0646\u0628\u064b\u0627.",
    "FIND YOUR WAY": "\u062a\u0635\u0641\u062d \u0627\u0644\u0645\u0648\u0642\u0639",
    "Privacy": "\u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629",
    "Owner access": "\u062f\u062e\u0648\u0644 \u0627\u0644\u0645\u0633\u0624\u0648\u0644",
    "DEMO CONTACT": "\u0628\u064a\u0627\u0646\u0627\u062a \u062a\u062c\u0631\u064a\u0628\u064a\u0629",
    "Address loading": "\u062c\u0627\u0631\u064d \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646",
    "Seed setup placeholders": "\u0628\u064a\u0627\u0646\u0627\u062a \u062a\u062c\u0631\u064a\u0628\u064a\u0629 \u2014 \u0627\u0633\u062a\u0628\u062f\u0644\u0647\u0627 \u0628\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0645\u0646\u0634\u0623\u062a\u0643.",
    "YOUR NEIGHBORHOOD RESET": "\u0627\u0633\u062a\u0631\u0627\u062d\u0629 \u0642\u0631\u064a\u0628\u0629 \u0645\u0646\u0643",
    "Make a little": "\u0627\u0645\u0646\u062d \u0646\u0641\u0633\u0643",
    "room for": "\u0645\u0633\u0627\u062d\u0629 \u0645\u0646",
    "you.": "\u0627\u0644\u0647\u062f\u0648\u0621.",
    "A considered pause in the middle of everything. Choose a treatment, find a time, and let the outside world wait a moment.": "\u0627\u0633\u062a\u0631\u0627\u062d\u0629 \u0647\u0627\u062f\u0626\u0629 \u0648\u0633\u0637 \u0627\u0646\u0634\u063a\u0627\u0644\u0643. \u0627\u062e\u062a\u0631 \u0639\u0644\u0627\u062c\u064b\u0627 \u0648\u0645\u0648\u0639\u062f\u064b\u0627.",
    "Book your visit": "\u0627\u062d\u062c\u0632 \u0632\u064a\u0627\u0631\u062a\u0643",
    "Explore treatments": "\u0627\u0643\u062a\u0634\u0641 \u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a",
    "A calm place, close to home": "\u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u0626 \u0628\u0627\u0644\u0642\u0631\u0628 \u0645\u0646\u0643",
    "THE STILLROOM WAY": "\u0623\u0633\u0644\u0648\u0628 Stillroom",
    "A slower hour can change the shape of a day.": "\u0633\u0627\u0639\u0629 \u0647\u0627\u062f\u0626\u0629 \u0642\u062f \u062a\u063a\u064a\u0651\u0631 \u064a\u0648\u0645\u0643.",
    "PAUSE": "\u0627\u0633\u062a\u0631\u062d",
    "HERE": "\u0647\u0646\u0627",
    "A GOOD PLACE TO BEGIN": "\u0628\u062f\u0627\u064a\u0629 \u0645\u0646\u0627\u0633\u0628\u0629",
    "Time that feels like yours.": "\u0648\u0642\u062a \u0644\u0643 \u0648\u062d\u062f\u0643.",
    "See every treatment": "\u062a\u0635\u0641\u062d \u062c\u0645\u064a\u0639 \u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a",
    "Language": "\u0627\u0644\u0644\u063a\u0629",
    "French": "\u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629",
    "Arabic": "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
    "Overview": "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",
    "Customers": "\u0627\u0644\u0639\u0645\u0644\u0627\u0621",
    "Audit logs": "\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u062a\u062f\u0642\u064a\u0642",
    "People & access": "\u0627\u0644\u0623\u0634\u062e\u0627\u0635 \u0648\u0627\u0644\u0635\u0644\u0627\u062d\u064a\u0627\u062a",
    "Staff desk": "\u0645\u0633\u0627\u062d\u0629 \u0641\u0631\u064a\u0642 \u0627\u0644\u0639\u0645\u0644",
    "Today, at a glance.": "\u0646\u0638\u0631\u0629 \u0633\u0631\u064a\u0639\u0629 \u0639\u0644\u0649 \u0627\u0644\u064a\u0648\u0645.",
    "Today's schedule": "\u062c\u062f\u0648\u0644 \u0627\u0644\u064a\u0648\u0645",
    "Manage the schedule, people, treatment catalog, and operational history.": "\u0623\u062f\u0631 \u0627\u0644\u062c\u062f\u0648\u0644 \u0648\u0627\u0644\u0641\u0631\u064a\u0642 \u0648\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a.",
    "Active": "\u0646\u0634\u0637",
    "Disabled": "\u0645\u0639\u0637\u0651\u0644",
    "All statuses": "\u0643\u0644 \u0627\u0644\u062d\u0627\u0644\u0627\u062a",
    "Add staff": "\u0625\u0636\u0627\u0641\u0629 \u0645\u0648\u0638\u0641",
    "Search staff accounts": "\u0627\u0628\u062d\u062b \u0641\u064a \u062d\u0633\u0627\u0628\u0627\u062a \u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646",
    "Services": "\u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a",
    "CUSTOMER RECORDS": "\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
    "Account type": "\u0646\u0648\u0639 \u0627\u0644\u062d\u0633\u0627\u0628",
    "All customers": "\u0643\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
    "With an account": "\u0644\u062f\u064a\u0647\u0645 \u062d\u0633\u0627\u0628",
    "Guest": "\u0636\u064a\u0641",
    "NAME": "\u0627\u0644\u0627\u0633\u0645",
    "EMAIL": "\u0627\u0644\u0628\u0631\u064a\u062f",
    "PHONE": "\u0627\u0644\u0647\u0627\u062a\u0641",
    "ACCOUNT": "\u0627\u0644\u062d\u0633\u0627\u0628",
    "ACTION": "\u0627\u0644\u0625\u062c\u0631\u0627\u0621",
    "Edit": "\u062a\u0639\u062f\u064a\u0644",
    "Cancel": "\u0625\u0644\u063a\u0627\u0621",
    "Save": "\u062d\u0641\u0638",
    "Display name": "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0645\u0639\u0631\u0648\u0636",
    "Account email": "\u0628\u0631\u064a\u062f \u0627\u0644\u062d\u0633\u0627\u0628",
    "Short bio": "\u0646\u0628\u0630\u0629 \u0642\u0635\u064a\u0631\u0629",
    "Available for bookings": "\u0645\u062a\u0627\u062d \u0644\u0644\u062d\u062c\u0648\u0632\u0627\u062a",
    "Disable sign-in account": "\u062a\u0639\u0637\u064a\u0644 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",
    "Save account changes": "\u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a",
    "No sign-in account": "\u0644\u0627 \u064a\u0648\u062c\u062f \u062d\u0633\u0627\u0628 \u062f\u062e\u0648\u0644",
    "Bookable": "\u0645\u062a\u0627\u062d \u0644\u0644\u062d\u062c\u0632",
    "Not bookable": "\u063a\u064a\u0631 \u0645\u062a\u0627\u062d \u0644\u0644\u062d\u062c\u0632",
    "STAFF ACCOUNTS": "\u062d\u0633\u0627\u0628\u0627\u062a \u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646",
    "Loading staff accounts": "\u062c\u0627\u0631\u064d \u062a\u062d\u0645\u064a\u0644 \u062d\u0633\u0627\u0628\u0627\u062a \u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646",
    "Loading customers": "\u062c\u0627\u0631\u064d \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
    "Loading events": "\u062c\u0627\u0631\u064d \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0623\u062d\u062f\u0627\u062b",
    "Could not load audit events.": "\u062a\u0639\u0630\u0651\u0631 \u062a\u062d\u0645\u064a\u0644 \u0633\u062c\u0644 \u0627\u0644\u062a\u062f\u0642\u064a\u0642.",
    "Try again": "\u062d\u0627\u0648\u0644 \u0645\u062c\u062f\u062f\u064b\u0627",
    "All records": "\u0643\u0644 \u0627\u0644\u0633\u062c\u0644\u0627\u062a",
    "All actors": "\u0643\u0644 \u0627\u0644\u0645\u0646\u0641\u0630\u064a\u0646",
    "Nothing to show yet.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a \u0644\u0644\u0639\u0631\u0636 \u0627\u0644\u0622\u0646.",
    "Loading the treatment menu": "\u064a\u062c\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a",
    "Treatments are being set up. Please check back soon.": "\u0646\u0639\u0645\u0644 \u0639\u0644\u0649 \u062a\u062c\u0647\u064a\u0632 \u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a. \u064a\u0631\u062c\u0649 \u0627\u0644\u0639\u0648\u062f\u0629 \u0642\u0631\u064a\u0628\u064b\u0627.",
    "Thoughtfully simple, from hello to see-you-soon.": "\u062a\u062c\u0631\u0628\u0629 \u0628\u0633\u064a\u0637\u0629 \u0648\u0645\u0631\u064a\u062d\u0629\u060c \u0645\u0646 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u062d\u062a\u0649 \u0627\u0644\u0648\u062f\u0627\u0639.",
    "THE VISIT, AT YOUR PACE": "\u0632\u064a\u0627\u0631\u062a\u0643 \u0628\u0625\u064a\u0642\u0627\u0639\u0643",
    "YOUR TIME, YOUR WAY": "\u0648\u0642\u062a\u0643 \u0643\u0645\u0627 \u062a\u062d\u0628",
    "A softer rhythm starts before you arrive.": "\u064a\u0628\u062f\u0623 \u0627\u0644\u0625\u064a\u0642\u0627\u0639 \u0627\u0644\u0623\u0643\u062b\u0631 \u0647\u062f\u0648\u0621\u064b\u0627 \u0642\u0628\u0644 \u0648\u0635\u0648\u0644\u0643.",
    "Browse what feels right, book without creating an account, and arrive knowing what to expect. Simple, clear, and made around your day.": "\u0627\u062e\u062a\u0631 \u0645\u0627 \u064a\u0646\u0627\u0633\u0628\u0643\u060c \u0648\u0627\u062d\u062c\u0632 \u0628\u062f\u0648\u0646 \u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628\u060c \u0648\u0627\u0635\u0644 \u0648\u0623\u0646\u062a \u062a\u0639\u0631\u0641 \u0645\u0627 \u064a\u0646\u062a\u0638\u0631\u0643. \u062a\u062c\u0631\u0628\u0629 \u0628\u0633\u064a\u0637\u0629 \u0648\u0648\u0627\u0636\u062d\u0629 \u062a\u0646\u0627\u0633\u0628 \u064a\u0648\u0645\u0643.",
    "Find a time online": "\u0627\u062e\u062a\u0631 \u0645\u0648\u0639\u062f\u064b\u0627 \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",
    "Availability updates from our live schedule.": "\u062a\u062a\u062d\u062f\u062b \u0627\u0644\u0645\u0648\u0627\u0639\u064a\u062f \u062d\u0633\u0628 \u0627\u0644\u062c\u062f\u0648\u0644 \u0627\u0644\u0645\u0628\u0627\u0634\u0631.",
    "A warm welcome": "\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u062f\u0627\u0641\u0626",
    "Share a note for the team when you book.": "\u0623\u0636\u0641 \u0645\u0644\u0627\u062d\u0638\u0629 \u0644\u0644\u0641\u0631\u064a\u0642 \u0639\u0646\u062f \u0627\u0644\u062d\u062c\u0632.",
    "Plan a visit": "\u062e\u0637\u0637 \u0644\u0632\u064a\u0627\u0631\u062a\u0643",
    "All treatments": "\u0643\u0644 \u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a",
    "FEATURED": "\u0645\u0645\u064a\u0632",
    " min": " \u062f\u0642\u064a\u0642\u0629",
    " minutes": " \u062f\u0642\u064a\u0642\u0629",
    "A MOMENT FOR YOU": "\u0644\u062d\u0638\u0629 \u0645\u0646 \u0623\u062c\u0644\u0643",
    "DURATION": "\u0627\u0644\u0645\u062f\u0629",
    "PRICE": "\u0627\u0644\u0633\u0639\u0631",
    "demo setup price": "\u0633\u0639\u0631 \u062a\u062c\u0631\u064a\u0628\u064a",
    "Find a time for this treatment": "\u0627\u062e\u062a\u0631 \u0645\u0648\u0639\u062f\u064b\u0627 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0644\u0627\u062c",
    "BOOK WITHOUT AN ACCOUNT": "\u0627\u062d\u062c\u0632 \u0628\u062f\u0648\u0646 \u062d\u0633\u0627\u0628",
    "Make it your time.": "\u0627\u062c\u0639\u0644\u0647\u0627 \u0644\u062d\u0638\u062a\u0643.",
    "Choose a service and available time, then leave the rest to us.": "\u0627\u062e\u062a\u0631 \u0627\u0644\u0639\u0644\u0627\u062c \u0648\u0627\u0644\u0645\u0648\u0639\u062f \u0627\u0644\u0645\u062a\u0627\u062d\u060c \u0648\u062f\u0639 \u0627\u0644\u0628\u0627\u0642\u064a \u0639\u0644\u064a\u0646\u0627.",
    "Choose a treatment": "\u0627\u062e\u062a\u0631 \u0639\u0644\u0627\u062c\u064b\u0627",
    "Select a treatment": "\u062d\u062f\u062f \u0639\u0644\u0627\u062c\u064b\u0627",
    "Pick a day & time": "\u0627\u062e\u062a\u0631 \u0627\u0644\u064a\u0648\u0645 \u0648\u0627\u0644\u0645\u0648\u0639\u062f",
    "Your details": "\u0628\u064a\u0627\u0646\u0627\u062a\u0643",
    "Full name": "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644",
    "Email address": "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
    "Phone number": "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",
    "A note for our team": "\u0645\u0644\u0627\u062d\u0638\u0629 \u0644\u0641\u0631\u064a\u0642\u0646\u0627",
    "(optional)": "(\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",
    "I have read and accept the": "\u0642\u0631\u0623\u062a \u0648\u0623\u0648\u0627\u0641\u0642 \u0639\u0644\u0649",
    "visit and cancellation policy": "\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u0632\u064a\u0627\u0631\u0629 \u0648\u0627\u0644\u0625\u0644\u063a\u0627\u0621",
    "Confirm appointment": "\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0645\u0648\u0639\u062f",
    "Choose a treatment to continue.": "\u0627\u062e\u062a\u0631 \u0639\u0644\u0627\u062c\u064b\u0627 \u0644\u0644\u0645\u062a\u0627\u0628\u0639\u0629.",
    "Choose an available appointment time.": "\u0627\u062e\u062a\u0631 \u0645\u0648\u0639\u062f\u064b\u0627 \u0645\u062a\u0627\u062d\u064b\u0627.",
    "Enter your name so the team knows who to welcome.": "\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0644\u064a\u0639\u0631\u0641 \u0627\u0644\u0641\u0631\u064a\u0642 \u0645\u0646 \u0633\u064a\u0633\u062a\u0642\u0628\u0644.",
    "Enter a valid email address.": "\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0635\u062d\u064a\u062d\u064b\u0627.",
    "Enter a phone number with at least 7 digits.": "\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641 \u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 7 \u0623\u0631\u0642\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.",
    "Please accept the visit policy to continue.": "\u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u0649 \u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u0632\u064a\u0627\u0631\u0629 \u0644\u0644\u0645\u062a\u0627\u0628\u0639\u0629.",
    "Choose another available appointment time.": "\u0627\u062e\u062a\u0631 \u0645\u0648\u0639\u062f\u064b\u0627 \u0645\u062a\u0627\u062d\u064b\u0627 \u0622\u062e\u0631.",
    "Your booking could not be completed. Please try again.": "\u062a\u0639\u0630\u0631 \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062d\u062c\u0632. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u062c\u062f\u062f\u064b\u0627.",
    "YOUR VISIT": "\u0632\u064a\u0627\u0631\u062a\u0643",
    "Treatment summary": "\u0645\u0644\u062e\u0635 \u0627\u0644\u0639\u0644\u0627\u062c",
    "Choose a date": "\u0627\u062e\u062a\u0631 \u062a\u0627\u0631\u064a\u062e\u064b\u0627",
    "Choose a time": "\u0627\u062e\u062a\u0631 \u0648\u0642\u062a\u064b\u0627",
    "Duration": "\u0627\u0644\u0645\u062f\u0629",
    "Price": "\u0627\u0644\u0633\u0639\u0631",
    "Date": "\u0627\u0644\u062a\u0627\u0631\u064a\u062e",
    "Time": "\u0627\u0644\u0648\u0642\u062a",
    "No account needed. Your request is checked against live availability when you confirm.": "\u0644\u0627 \u062d\u0627\u062c\u0629 \u0644\u062d\u0633\u0627\u0628. \u0633\u0646\u062a\u062d\u0642\u0642 \u0645\u0646 \u062a\u0648\u0641\u0631 \u0627\u0644\u0645\u0648\u0639\u062f \u0645\u0628\u0627\u0634\u0631\u0629\u064b \u0639\u0646\u062f \u0627\u0644\u062a\u0623\u0643\u064a\u062f.",
    "YOUR ACCOUNT": "\u062d\u0633\u0627\u0628\u0643",
    "Saved details": "\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0648\u0638\u0629",
    "Quick actions": "\u0625\u062c\u0631\u0627\u0621\u0627\u062a \u0633\u0631\u064a\u0639\u0629",
    "BOOK": "\u0627\u062d\u062c\u0632",
    "EXPLORE": "\u0627\u0633\u062a\u0643\u0634\u0641",
    "No bookings yet. Your upcoming and past appointments will appear here once you book a visit.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u062d\u062c\u0648\u0632\u0627\u062a \u0628\u0639\u062f. \u0633\u062a\u0638\u0647\u0631 \u0645\u0648\u0627\u0639\u064a\u062f\u0643 \u0627\u0644\u0642\u0627\u062f\u0645\u0629 \u0648\u0627\u0644\u0633\u0627\u0628\u0642\u0629 \u0647\u0646\u0627 \u0628\u0639\u062f \u0627\u0644\u062d\u062c\u0632.",
    "Guests": "\u0627\u0644\u0636\u064a\u0648\u0641",
    "Edit customer": "\u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0644",
  },
};

Object.assign(translations.fr, {
  Cart: 'Panier',
  'Choose treatments, add them to your cart, and reserve them together.': 'Choisissez plusieurs soins, ajoutez-les au panier et reservez-les ensemble.',
  'Treatment time': 'Duree des soins',
  'Includes the required space between treatments.': 'Inclut le temps necessaire entre les soins.',
  'That treatment is already in your cart.': 'Ce soin est deja dans votre panier.',
  'Your cart can contain up to eight treatments.': 'Votre panier peut contenir jusqu a huit soins.',
  'Add at least one treatment to your cart.': 'Ajoutez au moins un soin a votre panier.',
  'Add to cart': 'Ajouter au panier', 'Your cart': 'Votre panier', Remove: 'Retirer',
  'Your cart is empty. Add one or more treatments to continue.': 'Votre panier est vide. Ajoutez un ou plusieurs soins pour continuer.',
  'No available times for this cart on this date. Choose another day.': 'Aucun horaire ne convient a ce panier. Choisissez un autre jour.',
  'Current policy details are demo/setup placeholders.': 'Les conditions affichees sont des exemples de demonstration.',
  'Reserve cart': 'Reserver le panier', 'Reservation summary': 'Resume de la reservation',
  'Total duration': 'Duree totale', Total: 'Total', Date: 'Date', Time: 'Heure',
  'Cancellation policy is a demo/setup placeholder.': 'Les conditions d annulation sont un exemple de demonstration.',
  'Retry loading treatments': 'Reessayer de charger les soins',
});

Object.assign(translations.ar, {
  Cart: '\u0627\u0644\u0633\u0644\u0629',
  'Choose treatments, add them to your cart, and reserve them together.': '\u0627\u062e\u062a\u0631 \u0639\u0644\u0627\u062c\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629\u060c \u0623\u0636\u0641\u0647\u0627 \u0625\u0644\u0649 \u0633\u0644\u062a\u0643\u060c \u0648\u0627\u062d\u062c\u0632\u0647\u0627 \u0645\u0639\u064b\u0627.',
  'Treatment time': '\u0645\u062f\u0629 \u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a',
  'Includes the required space between treatments.': '\u064a\u0634\u0645\u0644 \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u0644\u0627\u0632\u0645 \u0628\u064a\u0646 \u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a.',
  'That treatment is already in your cart.': '\u0647\u0630\u0627 \u0627\u0644\u0639\u0644\u0627\u062c \u0645\u0648\u062c\u0648\u062f \u0641\u0639\u0644\u064b\u0627 \u0641\u064a \u0633\u0644\u062a\u0643.',
  'Your cart can contain up to eight treatments.': '\u064a\u0645\u0643\u0646 \u0623\u0646 \u062a\u062d\u062a\u0648\u064a \u0633\u0644\u062a\u0643 \u0639\u0644\u0649 \u062b\u0645\u0627\u0646\u064a\u0629 \u0639\u0644\u0627\u062c\u0627\u062a \u0643\u062d\u062f \u0623\u0642\u0635\u0649.',
  'Add at least one treatment to your cart.': '\u0623\u0636\u0641 \u0639\u0644\u0627\u062c\u064b\u0627 \u0648\u0627\u062d\u062f\u064b\u0627 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0625\u0644\u0649 \u0633\u0644\u062a\u0643.',
  'Add to cart': '\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629', 'Your cart': '\u0633\u0644\u062a\u0643', Remove: '\u0625\u0632\u0627\u0644\u0629',
  'Your cart is empty. Add one or more treatments to continue.': '\u0633\u0644\u062a\u0643 \u0641\u0627\u0631\u063a\u0629. \u0623\u0636\u0641 \u0639\u0644\u0627\u062c\u064b\u0627 \u0648\u0627\u062d\u062f\u064b\u0627 \u0623\u0648 \u0623\u0643\u062b\u0631 \u0644\u0644\u0645\u062a\u0627\u0628\u0639\u0629.',
  'Availability could not be loaded.': '\u062a\u0639\u0630\u0651\u0631 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0648\u0627\u0639\u064a\u062f \u0627\u0644\u0645\u062a\u0627\u062d\u0629.',
  'No available times for this cart on this date. Choose another day.': '\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0648\u0627\u0639\u064a\u062f \u0645\u062a\u0627\u062d\u0629 \u0644\u0647\u0630\u0647 \u0627\u0644\u0633\u0644\u0629 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u064a\u0648\u0645. \u0627\u062e\u062a\u0631 \u064a\u0648\u0645\u064b\u0627 \u0622\u062e\u0631.',
  'Current policy details are demo/setup placeholders.': '\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0623\u0645\u062b\u0644\u0629 \u062a\u062c\u0631\u064a\u0628\u064a\u0629.',
  'Reserve cart': '\u0623\u0643\u0651\u062f \u0627\u0644\u062d\u062c\u0632', 'Reservation summary': '\u0645\u0644\u062e\u0635 \u0627\u0644\u062d\u062c\u0632',
  'Total duration': '\u0627\u0644\u0645\u062f\u0629 \u0627\u0644\u0643\u0644\u064a\u0629', Total: '\u0627\u0644\u0645\u062c\u0645\u0648\u0639', Date: '\u0627\u0644\u062a\u0627\u0631\u064a\u062e', Time: '\u0627\u0644\u0648\u0642\u062a',
  'Cancellation policy is a demo/setup placeholder.': '\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u0625\u0644\u063a\u0627\u0621 \u0645\u062b\u0627\u0644 \u062a\u062c\u0631\u064a\u0628\u064a.',
  'Retry loading treatments': '\u0623\u0639\u062f \u0645\u062d\u0627\u0648\u0644\u0629 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a',
});

type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (english: string) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);

function initialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_KEY);
    return stored === 'fr' || stored === 'ar' ? stored : 'en';
  } catch {
    return 'en';
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try { window.localStorage.setItem(LANGUAGE_KEY, next); } catch { /* storage is optional */ }
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    t: (english) => language === 'en' ? english : translations[language][english] ?? english,
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider.');
  return context;
}
