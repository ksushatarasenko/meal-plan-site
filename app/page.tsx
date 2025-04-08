// (полный код из canvas вставится позже)
// app/page.tsx (или index.tsx в Vite)
"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import Image from "next/image"

const days = [
  {
    name: "Понедельник",
    meals: [
      { title: "Завтрак", text: "Овсянка с черникой и мёдом, семена льна" },
      { title: "Перекус", text: "Яблоко и миндаль" },
      { title: "Обед", text: "Гречка, куриная грудка, морковный салат с оливковым маслом" },
      { title: "Полдник", text: "Цельнозерновой хлеб с хумусом" },
      { title: "Ужин", text: "Запечённые овощи и лосось" },
    ],
    image: "/images/monday.jpg",
    recipe: "1. Сварить овсянку\n2. Добавить мёд и ягоды\n3. Посыпать льном"
  },
  {
    name: "Вторник",
    meals: [
      { title: "Завтрак", text: "Омлет с зеленью, цельнозерновой тост" },
      { title: "Перекус", text: "Банан" },
      { title: "Обед", text: "Чечевичный суп, салат со свёклой и рукколой" },
      { title: "Полдник", text: "Йогурт с семенами чиа" },
      { title: "Ужин", text: "Тушёная капуста, яйцо всмятку, картофель в мундире" },
    ],
    image: "/images/tuesday.jpg",
    recipe: "1. Взбить яйца с зеленью\n2. Обжарить на сковороде\n3. Подавать с тостом"
  },
  {
    name: "Среда",
    meals: [
      { title: "Завтрак", text: "Каша из проса с грушей и корицей" },
      { title: "Перекус", text: "Апельсин" },
      { title: "Обед", text: "Индейка на пару, перловка, кабачки тушёные" },
      { title: "Полдник", text: "Чай из трав и овсяное печенье без сахара" },
      { title: "Ужин", text: "Омлет с брокколи и зеленью" },
    ],
    image: "/images/wednesday.jpg",
    recipe: "1. Отварить просо\n2. Нарезать грушу, добавить в кашу\n3. Посыпать корицей"
  },
  {
    name: "Четверг",
    meals: [
      { title: "Завтрак", text: "Творог с мёдом, ягодами и льняными семенами" },
      { title: "Перекус", text: "Мандарин и орехи (грецкие/миндаль)" },
      { title: "Обед", text: "Томатный суп с чечевицей, цельнозерновой хлеб" },
      { title: "Полдник", text: "Морковь и хумус" },
      { title: "Ужин", text: "Скумбрия, отварной рис, салат из капусты и зелени" },
    ],
    image: "/images/thursday.jpg",
    recipe: "1. Смешать творог с мёдом\n2. Добавить ягоды и семена льна\n3. Подавать охлажденным"
  },
  {
    name: "Пятница",
    meals: [
      { title: "Завтрак", text: "Овсянка с яблоком и корицей" },
      { title: "Перекус", text: "Чай с шиповником, грецкий орех" },
      { title: "Обед", text: "Гречка, тушёная говядина, тушёная капуста" },
      { title: "Полдник", text: "Йогурт натуральный" },
      { title: "Ужин", text: "Картофельное пюре, запечённая белая рыба, салат из огурца и зелени" },
    ],
    image: "/images/friday.jpg",
    recipe: "1. Отварить овсянку на воде\n2. Добавить тёртое яблоко и щепотку корицы"
  },
  {
    name: "Суббота",
    meals: [
      { title: "Завтрак", text: "Яйца всмятку, авокадо, хлеб цельнозерновой" },
      { title: "Перекус", text: "Смузи: банан, шпинат, вода или миндальное молоко" },
      { title: "Обед", text: "Суп-пюре из брокколи с оливковым маслом" },
      { title: "Полдник", text: "Яйцо варёное" },
      { title: "Ужин", text: "Филе курицы запечённое, бурый рис, салат с рукколой" },
    ],
    image: "/images/saturday.jpg",
    recipe: "1. Взбить смузи в блендере\n2. Яйца отварить всмятку\n3. Подавать с авокадо и хлебом"
  },
  {
    name: "Воскресенье",
    meals: [
      { title: "Завтрак", text: "Омлет с грибами и шпинатом" },
      { title: "Перекус", text: "Любой сезонный фрукт" },
      { title: "Обед", text: "Киноа с тушеными овощами и фасолью" },
      { title: "Полдник", text: "Финики и миндаль" },
      { title: "Ужин", text: "Запечённая рыба, салат из капусты, картофель отварной" },
    ],
    image: "/images/sunday.jpg",
    recipe: "1. Взбить яйца, добавить нарезанные грибы и шпинат\n2. Обжарить под крышкой\n3. Подавать с зеленью"
  },
]

const supplements = [
  "Железо (Sorbifer, Hemofer): утром натощак с соком",
  "Витамин D3 (Vigantol, D-Vitum): с жирной пищей, в обед",
  "Омега-3 (Gold Omega-3): во время еды",
  "Селен + Цинк (Solgar, Olimp Labs): после еды, утром",
  "Магний + B6 (Olimp): вечером",
  "Витамин B12 (Solgar B12): утром под язык, курсами",
  "Контроль ферритина через 2 месяца!",
]

export default function MealPlanPage() {
  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Полноценное меню на неделю</h1>
      <Tabs defaultValue="Понедельник" className="w-full">
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1">
          {days.map((day) => (
            <TabsTrigger key={day.name} value={day.name}>{day.name}</TabsTrigger>
          ))}
        </TabsList>

        {days.map((day) => (
          <TabsContent key={day.name} value={day.name}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="grid sm:grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col gap-4">
                <Image
                  src={day.image}
                  alt={`Фото на ${day.name}`}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-md object-cover"
                />
                <div className="bg-muted p-4 rounded-xl text-sm whitespace-pre-line">
                  <h3 className="font-semibold mb-2">Пример рецепта:</h3>
                  {day.recipe}
                </div>
              </div>
              <ScrollArea className="h-64">
                <div className="space-y-4">
                  {day.meals.map((meal, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{meal.title}</h3>
                        <p className="text-sm text-muted-foreground">{meal.text}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      <Separator className="my-10" />

      <div>
        <h2 className="text-2xl font-bold mb-4">Добавки и витамины</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
          {supplements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}
