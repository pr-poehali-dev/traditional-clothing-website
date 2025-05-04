
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClothingCard from "@/components/ClothingCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Герой-секция */}
      <div className="relative h-[70vh] bg-gradient-to-r from-amber-700 to-red-800 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518982380512-5a3c6a0587fb')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-4xl px-6 py-32 text-white z-10">
          <h1 className="text-5xl font-bold mb-6">Традиционная китайская одежда</h1>
          <p className="text-xl mb-8">Погрузитесь в богатую историю и культуру традиционной китайской одежды — от древних династий до современности</p>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white border-0 rounded-md px-6 py-3 text-lg">
            Исследовать
          </Button>
        </div>
      </div>

      {/* Секция "О проекте" */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">О нашем проекте</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наш культурно-образовательный проект посвящен богатому наследию традиционной китайской одежды, её истории, символизму и влиянию на мировую моду.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-amber-600 text-center mb-4">
                <span className="text-4xl">🏮</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">История</h3>
              <p className="text-gray-600 text-center">
                Исследуйте эволюцию китайской одежды через династии от Хань до Цин.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-amber-600 text-center mb-4">
                <span className="text-4xl">🧵</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Стили и типы</h3>
              <p className="text-gray-600 text-center">
                Узнайте о разнообразии ханьфу, ципао, туничных костюмов и других видов одежды.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-amber-600 text-center mb-4">
                <span className="text-4xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Символизм</h3>
              <p className="text-gray-600 text-center">
                Откройте для себя значение цветов, узоров и орнаментов в китайской одежде.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Популярные традиционные наряды */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Популярные традиционные наряды</h2>

          <Tabs defaultValue="hanfu" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="hanfu">Ханьфу</TabsTrigger>
              <TabsTrigger value="qipao">Ципао</TabsTrigger>
              <TabsTrigger value="tangzhuang">Танчжуан</TabsTrigger>
            </TabsList>
            <TabsContent value="hanfu">
              <div className="grid md:grid-cols-3 gap-6">
                <ClothingCard 
                  title="Ханьфу династии Хань"
                  description="Классический костюм эпохи династии Хань, состоящий из длинной туники и широких рукавов."
                  image="https://images.unsplash.com/photo-1626013686653-d8c238bd92a8"
                />
                <ClothingCard 
                  title="Ханьфу династии Тан"
                  description="Элегантный наряд с высокой талией и пышными рукавами, популярный в эпоху Тан."
                  image="https://images.unsplash.com/photo-1627873649417-c67c5ab7b357"
                />
                <ClothingCard 
                  title="Свадебный Ханьфу"
                  description="Роскошные церемониальные наряды для невест в традиционном стиле."
                  image="https://images.unsplash.com/photo-1625473039743-2248731b6267"
                />
              </div>
            </TabsContent>
            <TabsContent value="qipao">
              <div className="grid md:grid-cols-3 gap-6">
                <ClothingCard 
                  title="Традиционное Ципао"
                  description="Облегающее платье с высоким воротником и боковыми разрезами."
                  image="https://images.unsplash.com/photo-1594125674956-61a9b49c8eeb"
                />
                <ClothingCard 
                  title="Современное Ципао"
                  description="Современная интерпретация традиционного наряда с новыми элементами дизайна."
                  image="https://images.unsplash.com/photo-1622396636133-ba43f812bc35"
                />
                <ClothingCard 
                  title="Церемониальное Ципао"
                  description="Богато украшенный вариант для официальных и праздничных мероприятий."
                  image="https://images.unsplash.com/photo-1572803090136-fee6ee9d598f"
                />
              </div>
            </TabsContent>
            <TabsContent value="tangzhuang">
              <div className="grid md:grid-cols-3 gap-6">
                <ClothingCard 
                  title="Мужской Танчжуан"
                  description="Традиционный мужской костюм с характерной застежкой и воротником-стойкой."
                  image="https://images.unsplash.com/photo-1610308479130-5141d71ba6e3"
                />
                <ClothingCard 
                  title="Праздничный Танчжуан"
                  description="Костюм с яркими узорами для важных праздников и церемоний."
                  image="https://images.unsplash.com/photo-1552838347-0711eae4a7d6"
                />
                <ClothingCard 
                  title="Современный Танчжуан"
                  description="Адаптация традиционного стиля к современной моде и дизайну."
                  image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Начните изучение прямо сейчас</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к нашему образовательному путешествию по миру традиционной китайской одежды
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            Смотреть коллекцию
          </Button>
          <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
            Узнать больше
          </Button>
        </div>
      </div>

      {/* Подвал */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Традиционная китайская одежда</h3>
            <p className="text-gray-400 mb-6">Культурно-образовательный проект</p>
            <p className="text-sm text-gray-500">© 2025 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
