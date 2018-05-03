angular.module("portfolio", [])
  .controller('portfolioArray',function($scope){
      $scope.portfolios = [
        {'name': 'Tajam', 'URL': 'Tajam/index.html', 'Image': 'img/Tajam.png', 'description': 'A responsive template for the Creative Agency, Tajam.', 'skills':'Photoshop, HTML5, CSS3, Sass, Bootstrap, Jquery, Grunt'},
        {'name':'WeatherPlay', 'URL': 'http://officialproductivity.eu', 'Image': 'img/WeatherPlay.png', 'description': 'A responsive weather application that displays current time, as well as average temperature in three popular cities.', 'skills': 'Photoshop, HTML5, CSS3, Sass, Grunt, Javascript, Jquery, AJAX'},
        {'name': 'EC1', 'URL':'EC1/index.html','Image':'img/EC1.png', 'description':'A responsive template, showcasing a gallery.', 'skills': 'HTML5, CSS3, Sass, Bootstrap, Jquery, AngularJS, Grunt'},
        {'name':'Eclipse', 'URL':'Eclipse/index.html', 'Image':'img/Eclipse.png', 'description': 'A fully responsive grid template for a modern, sleek design brand.', 'skills': 'HTML5,CSS3,Sass, Bootstrap'},
        {'name':'BlogUI', 'URL':'BlogUI/Code/index.html', 'Image':'img/BlogUI.png', 'description': 'A fully responsive grid template, for a photography blog.', 'skills': 'HTML5, CSS3, Sass, Bootstrap'},
        {'name':'Chess', 'URL':'Chess/index.html', 'Image':'img/Chess.png', 'description': 'A clean chess related template, potentially showing latest news.', 'skills': 'HTML5, CSS3, Sass, Bootstrap'},
        {'name':'Dice', 'URL':'Dice/index.html', 'Image':'Dice/Dice Roll Screenshot.png', 'description': 'A simple random dice number generator.', 'skills': 'HTML5, CSS3, Sass, Javascript, Jquery, Bootstrap'},
        {'name': 'Treehouse Profile', 'URL': 'https://teamtreehouse.com/bandablemusic', 'Image': 'img/treehouse.png', 'description': 'A record of my learning journey through learning platform TeamTreehouse.', 'skills':''},
        {'name':'PSD2HTMLConverter', 'URL':'https://github.com/MenatPink/PSD2HTMLUnitConverter', 'Image':'img/PSD2HTMLimage.svg', 'description': 'A list of Sass functions, used to convert photoshop units directly into their CSS equivalents.', 'skills': 'Sass'},
        {'name':'To-Do List', 'URL':'To-Do List/index.html', 'Image':'img/ToDoList.png', 'description': 'A To-Do list application with add and delete functionality.', 'skills': 'HTML5, CSS3, Sass, AngularJS, Bootstrap'},
        {'name':'Shophia', 'URL':'Shophia/index.html', 'Image':'img/Shophia.png', 'description': 'A fully responsive fashion template, advertising the clothing brand, Shophia.', 'skills': 'HTML5, CSS3, Sass, Javascript, Jquery, Bootstrap'},
        {'name':'Sociable Surveyors', 'URL':'Draft2/index.html', 'Image':'img/Screenshot Capture - 2017-03-30 - 05-53-00.png', 'description': 'A mobile-first, fully responsive example site for Sociable Surveyors, An internship provider.', 'skills': 'HTML5, CSS3, Sass, Bootstrap'},
        {'name':'Afrodyta', 'URL':'Afrodyta/Code/index.html', 'Image':'Afrodyta/Wireframes/AfrodytaScreenshot.png', 'description': 'An interactive template, for AFRODYTA, a millenial fashion brand.', 'skills': 'HTML5, CSS3, Sass, Bootstrap'},
        {'name':'Planning your Wedding', 'URL':'http://www.planningyourwedding.co.uk/', 'Image':'img/planningyourwedding.png', 'description': 'A responsive website created for company "planningyourWedding".', 'skills':'HTML5, CSS3, Jquery, PHP, Wordpress'},
      ]

  })
;
