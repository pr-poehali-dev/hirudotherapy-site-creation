import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Гирудотерапия</h1>
            <div className="hidden md:flex gap-6 text-sm">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">Обо мне</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('method')} className="hover:text-primary transition-colors">Методика</button>
              <button onClick={() => scrollToSection('indications')} className="hover:text-primary transition-colors">Показания</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/bda6fbad-4208-43a7-9e5c-fa5b63a4d3b0/files/6973e74d-2897-46d1-9db3-c2983a3c90ca.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Яковлева Ольга Васильевна
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-delay-1">
              Специалист по гирудотерапии
            </p>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
              Натуральный подход к оздоровлению организма с использованием проверенных веками методик
            </p>
            <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8 animate-fade-in-delay-3">
              Записаться на приём
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Обо мне</h2>
            <Card className="border-2 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-secondary">
                    <img 
                      src="https://cdn.poehali.dev/projects/bda6fbad-4208-43a7-9e5c-fa5b63a4d3b0/files/4f6dffce-6df9-4e24-8405-3fc6c3df90fe.jpg" 
                      alt="Кабинет" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed mb-4">
                      Практикующий специалист по гирудотерапии с многолетним опытом работы. Прошла профессиональную подготовку и имею сертификаты, подтверждающие квалификацию.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                      Моя миссия — помочь людям восстановить здоровье естественным путем, используя древние методы лечения в сочетании с современными знаниями о работе организма.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Индивидуальный подход к каждому пациенту, внимание к деталям и профессионализм — основа моей работы.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'Leaf', title: 'Общая гирудотерапия', desc: 'Комплексное оздоровление организма' },
              { icon: 'Heart', title: 'Сердечно-сосудистая система', desc: 'Улучшение кровообращения и работы сердца' },
              { icon: 'Brain', title: 'Неврология', desc: 'Лечение неврологических заболеваний' },
              { icon: 'Sparkles', title: 'Косметология', desc: 'Омоложение и улучшение состояния кожи' },
              { icon: 'Activity', title: 'Опорно-двигательный аппарат', desc: 'Лечение суставов и позвоночника' },
              { icon: 'Users', title: 'Женское здоровье', desc: 'Гинекологические заболевания' },
            ].map((service, i) => (
              <Card key={i} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://cdn.poehali.dev/projects/bda6fbad-4208-43a7-9e5c-fa5b63a4d3b0/files/0c0fb21b-05e2-4895-97aa-34c3972d3b94.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Методика гирудотерапии</h2>
            <Card className="border-2 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Info" size={24} className="text-accent" />
                      Что такое гирудотерапия?
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Гирудотерапия — это метод лечения с использованием медицинских пиявок. В слюне пиявки содержится более 100 биологически активных веществ, которые оказывают комплексное оздоравливающее действие на организм.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Microscope" size={24} className="text-accent" />
                      Механизм действия
                    </h3>
                    <ul className="space-y-2 text-lg">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                        <span>Разжижение крови и улучшение её текучести</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                        <span>Противовоспалительное действие</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                        <span>Укрепление иммунитета</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                        <span>Обезболивающий эффект</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                        <span>Улучшение микроциркуляции крови</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Clock" size={24} className="text-accent" />
                      Как проходит сеанс
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Сеанс длится от 30 до 60 минут. Пиявки устанавливаются на биологически активные точки. Процедура безболезненна и комфортна. После сеанса возможны небольшие кровотечения — это нормальная реакция.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="indications" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Показания и противопоказания</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-accent/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-accent">
                    <Icon name="CheckCircle" size={28} />
                    Показания
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Гипертония',
                      'Варикозное расширение вен',
                      'Тромбофлебит',
                      'Артроз и артрит',
                      'Остеохондроз',
                      'Мигрень',
                      'Заболевания печени',
                      'Гинекологические проблемы',
                      'Косметологические дефекты',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Plus" size={18} className="text-accent mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-destructive/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-destructive">
                    <Icon name="XCircle" size={28} />
                    Противопоказания
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Гемофилия',
                      'Анемия (низкий гемоглобин)',
                      'Беременность',
                      'Онкологические заболевания',
                      'Острые инфекции',
                      'Индивидуальная непереносимость',
                      'Низкое давление',
                      'Истощение организма',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Minus" size={18} className="text-destructive mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Контакты и запись</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Телефон</p>
                        <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">info@hirudotherapy.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Адрес</p>
                        <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Время работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                        <p className="text-muted-foreground">Сб: 10:00 - 15:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Записаться на приём</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Сообщение (опционально)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Часто задаваемые вопросы</h2>
            <Card className="border-2">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold text-left">
                      Это больно?
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      Нет, процедура практически безболезненна. В момент присасывания пиявки вы можете почувствовать легкое покалывание, похожее на укус комара. Затем пиявка выделяет обезболивающие вещества, и дискомфорт полностью исчезает.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold text-left">
                      Сколько нужно сеансов?
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      Количество сеансов зависит от заболевания и индивидуальных особенностей организма. Обычно курс составляет 7-10 процедур с интервалом 3-7 дней. После консультации я составлю индивидуальную программу лечения.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold text-left">
                      Есть ли побочные эффекты?
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      Побочные эффекты минимальны. После процедуры в течение 1-2 суток возможно небольшое кровотечение из ранки — это нормально. Иногда может появиться легкий зуд в месте укуса, который быстро проходит. Все рекомендации по уходу я даю после сеанса.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-semibold text-left">
                      Пиявки безопасны?
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      Абсолютно! Я использую только медицинских пиявок, выращенных на специальных биофабриках. Каждая пиявка используется только один раз, после чего утилизируется. Это полностью исключает риск инфицирования.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-semibold text-left">
                      Как подготовиться к сеансу?
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      Перед сеансом не используйте парфюм, кремы и лосьоны на теле. Примите душ без сильно пахнущих средств. Не курите и не употребляйте алкоголь за сутки до процедуры. Покушайте за 2 часа до сеанса. Остальные рекомендации я дам при записи.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-lg font-semibold text-left">
                      Когда будет виден результат?
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      Многие пациенты отмечают улучшение самочувствия уже после первого сеанса. Накопительный эффект проявляется после 3-4 процедур. Стойкий результат достигается после прохождения полного курса лечения.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Яковлева Ольга Васильевна - Гирудотерапия</p>
          <p className="text-sm opacity-90">Натуральный подход к вашему здоровью</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;