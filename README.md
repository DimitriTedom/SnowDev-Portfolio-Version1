# 🌌 SnowDev Portfolio - Modern Developer Portfolio

![Project Preview](/asssets/img/STS%20PORTOFOLIO.png)

Un portfolio moderne avec animations spatiales et design élancé, mettant en valeur des projets de développement web.

## ✨ Fonctionnalités Existantes

- 🪐 Background vidéo galactique
- 🌀 Animation de trou noir interactive
- 💫 Effets de dégradé animés
- 📱 Design responsive avec menu mobile
- 🚀 Sections animées (AOS library)
- 📦 Variables CSS personnalisées
- 🌠 Effets de flou (backdrop-filter)

## 🚩 Fonctionnalités à Implémenter

### Sections Manquantes
- **📨 Formulaire de Contact**  
  Intégration d'un formulaire avec validation et lien vers service d'email (Formspree/Netlify Forms)
  
- **👤 Section "À Propos"**  
  Section détaillée avec bio, photo et parcours professionnel + timeline interactive

- **🛠 Section "Compétences"**  
  Affichage des compétences techniques avec progress bars animés et système de filtrage

- **🚀 Section "Projets"**  
  Galerie de projets avec : 
  - Filtrage par catégorie (Web/Mobile/UI)
  - Mode grille/liste
  - Lightbox pour les détails
  - Tags technologiques

### Améliorations Possibles
- **🌐 Internationalisation**  
  Support multilingue (FR/EN) avec système de traduction

- **📊 Tableau de Bord Admin**  
  Interface d'administration pour gérer le contenu (Projets/Compétences)

- **🔍 Recherche de Projets**  
  Barre de recherche avec filtrage en temps réel

- **🎨 Customisation Thème**  
  Sélecteur de thème couleur + mode sombre/clair

- **📈 Analytics Intégrés**  
  Intégration avec Google Analytics/Plausible

- **📱 PWA Features**  
  Conversion en Progressive Web App avec offline support

## 🛠 Technologies utilisées

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Bibliothèques :**
- [AOS](https://michalsnik.github.io/aos/) - Animations au scroll
- [Font Awesome](https://fontawesome.com/) - Icônes sociales

## 🚀 Installation

1. **Cloner le dépôt**
```bash
git clone https://github.com/DimitriTedom/SnowDev-Portfolio-Version1.git
cd SnowDev-Portfolio-Version1
```

2. **Structure des fichiers**
```
📦SnowDev-Portfolio-Version1
┣ 📂assets
┃ ┣ 📂css
┃ ┃ ┗ 📜index.css
┃ ┣ 📂img
┃ ┃ ┣ 📜astronaut.png
┃ ┃ ┗ 📜STS-Portfolio.png
┃ ┣ 📂videos
┃ ┃ ┣ 📜blackhole.mp4
┃ ┃ ┗ 📜galaxy.mp4
┣ 📜index.html
┣ 📜script.js
┗ 📜README.md
```

3. **Prérequis**
- Navigateur moderne supportant CSS Variables et backdrop-filter
- Connexion internet (pour les CDN)

## 📸 Captures d'écran

![Desktop View](/asssets/img/preview.png) <!-- Ajouter image -->
![Mobile View](/asssets/img/preview-mobile.jpg) <!-- Ajouter image -->

## 📝 Personnalisation

1. Modifier les variables CSS dans `:root`
```css
:root {
  --primary-color: #72a1de;
  --gradient: linear-gradient(...);
}
```

2. Mettre à jour le contenu dans `index.html`
```html
<section class="hero">
  <!-- Votre contenu ici -->
</section>
```

3. Ajouter de nouvelles sections
```html
<section class="projects" data-aos="fade-up">
  <!-- Projets -->
</section>
```

## 🤝 Contribution

Les contributions sont les bienvenues ! 
1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 License

Distribué sous licence MIT. Voir `LICENSE` pour plus d'informations.

## 📬 Me contacter

**Tedom Tafotsi Dimitri Wilfried** - Développeur Full Stack

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DimitriTedom)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tedom-tafotsi-dimitri-wilfried-b70502298/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/DimitriTedom)

✉️ **Email** : dimitritedom@gmail.com

--- 

**⭐ N'hésitez pas à star le repo si vous trouvez le projet utile !**