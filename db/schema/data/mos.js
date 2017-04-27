var mos = `[
{"region":"Город Ярославль","np":"Ярославль","sity":"Тутаевское","house":"95а","name":"Областной кожно-венерологический диспансер","ogrn":"1027600507967"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Собинова","house":"43","name":"Областная клиническая туберкулезная больница","ogrn":"1027600680073"},
{"region":"Рыбинский район","np":"Рыбинск","sity":"Солнечная","house":"57","name":"Городская больница № 1","ogrn":"1147610003265"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Октября","house":"59","name":"Ярославская областная клиническая наркологическая больница","ogrn":"1027600839408"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Ленина","house":"55","name":"Областной врачебно-физкультурный диспансер","ogrn":"1027600678368"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Угличская","house":"40","name":"КГВВ - международный центр по проблемам пожилых людей Здоровое долголетие","ogrn":"1027600839573"},
{"region":"Рыбинский район","np":"Рыбинск","sity":"Максима Горького","house":"52","name":"Городская больница № 2 имени Н.И. Пирогова","ogrn":"1147610003276"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Загородный Сад","house":"11","name":"КБСМП имени Н.В.Соловьева","ogrn":"1027600847262"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Здоровья","house":"10","name":"Больница № 7","ogrn":"1027600627339"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Ленина","house":"12/76","name":"детская клиническая больница № 1","ogrn":"1027600851310"},
{"region":"Рыбинский район","np":"Рыбинск","sity":"Ухтомского","house":"4а","name":"Рыбинская психиатрическая больница","ogrn":"1057601802961"},
{"region":"Рыбинский район","np":"Рыбинск","sity":"Солнечная","house":"41","name":"Рыбинская ЦРП","ogrn":"1027601112120"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Угличская","house":"38","name":"Поликлиника № 2","ogrn":"1027600688598"},
{"region":"Рыбинский район","np":"Рыбинск","sity":"Герцена/Гоголя","house":"13/24","name":"Городская поликлиника № 3 им. Н.А. Семашко","ogrn":"1027601108017"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Октября","house":"67","name":"Областная клиническая онкологическая больница","ogrn":"1027600845117"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Октября","house":"54","name":"Инфекционная клиническая больница № 1","ogrn":"1027600840277"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Тутаевское","house":"31в","name":"Областной перинатальный центр","ogrn":"1107606005650"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Чайковского","house":"47","name":"Областная стоматологическая поликлиника","ogrn":"1027600677235"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Урицкого","house":"2/55а","name":"Стоматологическая поликлиника № 3","ogrn":"1027600514061"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Чайковского","house":"66","name":"Специализированный дом ребенка № 2","ogrn":"1027600681833"},
{"region":"Рыбинский район","np":"Рыбинск","sity":"Солнечная","house":"59а,в","name":"Рыбинская станция переливания крови","ogrn":"1057601802829"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Тутаевское","house":"95в","name":"Областная станция переливания крови","ogrn":"1037600006454"},
{"region":"Рыбинский район","np":"Рыбинск","sity":"Яна Гуса","house":"3","name":"Рыбинская стоматологическая поликлиника","ogrn":"1027601116510"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Моховая","house":"14","name":"Областной специализированный дом ребенка № 1","ogrn":"1027600622477"},
{"region":"Любимский район","np":"Останково","sity":"Нефтяников","house":"1а","name":"Любимская центральная районная больница","ogrn":"1027601461260"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Ленина","house":"37/73","name":"Детская стоматологическая поликлиника № 2","ogrn":"1027600851816"},
{"region":"Город Переславль-Залесский","np":"Переславль-Залесский","sity":"Свободы","house":"42а","name":"Переславская ЦРБ","ogrn":"1027601054865"},
{"region":"Пошехонский район","np":"Пошехонье","sity":"Красноармейская","house":"5","name":"Пошехонская ЦРБ","ogrn":"1027601132239"},
{"region":"Мышкинский район","np":"Мышкин","sity":"Самкова","house":"1","name":"ЦРБ им. Д.Л.Соколова ","ogrn":"1027601491752"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Маяковского","house":"61","name":"Клиническая больница № 3","ogrn":"1027600622280"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Попова","house":"24","name":"Клиническая больница № 2","ogrn":"1027600983080"},
{"region":"Ярославский район","np":"Карабиха","sity":"Больничный городок","house":"1а","name":"Ярославская ЦРБ ","ogrn":"1037602605963"},
{"region":"Некрасовский район","np":"Бурмакино","sity":"Ленина","house":"21а","name":"Бурмакинская РБ №1","ogrn":"1027601604634"},
{"region":"Гаврилов-Ямский район","np":"Гаврилов-Ям","sity":"Северная","house":"5а","name":"Гаврилов-Ямская ЦРБ","ogrn":"1027601069715"},
{"region":"Тутаевский район","np":"Тутаев","sity":"Комсомольская","house":"104","name":"Тутаевская ЦРБ","ogrn":"1027601275723"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Яковлевская","house":"7","name":"Областная клиническая больница ","ogrn":"1027600622301"},
{"region":"Рыбинский район","np":"Рыбинск","sity":"50 лет Октября","house":"2а","name":"Городская больница № 4","ogrn":"1027601110591"},
{"region":"Брейтовский район","np":"Брейтово","sity":"Республиканская","house":"35 А","name":"Брейтовская ЦРБ","ogrn":"1027601492456"},
{"region":"Даниловский район","np":"Данилов","sity":"Карла Маркса","house":"64","name":"Даниловская ЦРБ","ogrn":"1027601461007"},
{"region":"Угличский район","np":"Углич","sity":"Северная","house":"7","name":"Угличская ЦРБ ","ogrn":"1027601310758"},
{"region":"Борисоглебский район","np":"Борисоглебский","sity":"Красноармейская","house":"23а","name":" Борисоглебская  ЦРБ","ogrn":"1027601072157"},
{"region":"Ростовский район","np":"Ростов","sity":"Фрунзе","house":"31","name":"Ростовская ЦРБ","ogrn":"1147609001209"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Октября","house":"52","name":"Клиническая больница № 1","ogrn":"1027600852366"},
{"region":"Первомайский район","np":"Пречистое","sity":"Некрасова","house":"15","name":"Пречистенская центральная районая  больница","ogrn":"1027601460468"},
{"region":"Рыбинский район","np":"Рыбинск","sity":"Рокоссовского","house":"15","name":"Городская больница № 3","ogrn":"1027601121503"},
{"region":"Рыбинский район","np":"Рыбинск","sity":"Чкалова","house":"53","name":"Городская детская больница","ogrn":"1027601125232"},
{"region":"Рыбинский район","np":"Рыбинск","sity":"Солнечная","house":"55","name":"Городская больница № 6 ","ogrn":"1157627033068"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Тутаевское","house":"31","name":"Клиническая больница № 9","ogrn":"1147602005418"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Гагарина","house":"12","name":"Клиническая больница № 10","ogrn":"1027600790777"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Суздальское","house":"39","name":"Клиническая больница № 8 ","ogrn":"1027600988898"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Семашко","house":"7","name":"Городская больница имени Н.А.Семашко","ogrn":"1117604008026"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Тутаевское","house":"27","name":"Областная детская клиническая больница","ogrn":"1077602005128"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Терешковой","house":"22","name":"Клиническая больница № 5","ogrn":"1027600678093"},
{"region":"Некрасовский район","np":"Некрасовское","sity":"Набережная","house":"46","name":"Некрасовская ЦРБ","ogrn":"1027601604601"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Машиностроителей","house":"20","name":"Детская поликлиника № 5","ogrn":"1027600625007"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Тутаевское","house":"29","name":"Детская поликлиника № 3","ogrn":"1027600518967"},
{"region":"Город Ярославль","np":"Ярославль","sity":"Загородный Сад","house":"6, 13, 15","name":"Ярославская областная клиническая психиатрическая больница","ogrn":"1027600839925"},
{"region":"Гаврилов-Ямский район","np":"Поляна","sity":"Поляна","house":"не указан","name":"Детский санаторий Искра","ogrn":"1127609000595"},
{"region":"Большесельский район","np":"Большое Село","sity":"Челюскинцев","house":"1в","name":"Большесельская  ЦРБ","ogrn":"1027601272621"},
{"region":"Некоузский район","np":"Новый Некоуз","sity":"Больничный","house":"5","name":"Некоузская ЦРБ","ogrn":"1027601494436"}]`;
module.exports = mos;