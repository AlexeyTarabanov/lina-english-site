const telegramUrl = "https://t.me/LinaCarolina19";

const pupils = [
  "Разобраться со школьной программой и повысить успеваемость",
  "Подготовиться к поступлению в гимназию или языковую школу",
  "Подготовиться к Cambridge: Movers, Flyers, KET и PET",
  "Начать применять английский в реальных ситуациях",
];

const adults = [
  "Свободнее говорить и понимать носителей языка",
  "Смотреть сериалы и YouTube без постоянного словаря",
  "Подготовиться к работе, где нужен английский от B1",
  "Уверенно общаться в путешествиях и на работе",
];

function TelegramLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={className}
      href={telegramUrl}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top">
          Lina<span>.</span>English
        </a>
        <nav>
          <a href="#help">Кому подойдёт</a>
          <a href="#about">Обо мне</a>
          <TelegramLink className="pill">Записаться</TelegramLink>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div>
          <p className="eyebrow">Английский для детей и взрослых</p>
          <h1>
            Английский,
            <br />
            <em>который работает</em>
            <br />в реальной жизни
          </h1>
          <p className="lead">
            Привет! Я Лина. Помогаю разобраться, как устроен язык, закрыть
            пробелы и уверенно применять английский на практике.
          </p>
          <div className="actions">
            <TelegramLink className="button">
              Записаться на диагностику ↗
            </TelegramLink>
            <span>Первые 30 минут — бесплатно</span>
          </div>
        </div>
        <div className="photo">
          <img
            src="/lina.jpeg"
            alt="Лина, преподаватель английского языка"
          />
          <aside>
            <b>Hello!</b>
            <br />
            Let’s speak
            <br />
            English ✦
          </aside>
        </div>
      </section>

      <section className="facts shell">
        <div>
          <b>4 года</b>
          <span>преподаю английский детям и взрослым</span>
        </div>
        <div>
          <b>C1</b>
          <span>подтверждённый уровень, май 2026</span>
        </div>
        <div>
          <b>Cambridge</b>
          <span>готовлю к Movers, Flyers, KET и PET</span>
        </div>
      </section>

      <section className="help shell" id="help">
        <p className="eyebrow">С чем я помогаю</p>
        <h2>
          Цель у каждого своя.
          <br />
          <em>Маршрут — тоже.</em>
        </h2>
        <div className="cards">
          <article>
            <small>01</small>
            <h3>Школьникам</h3>
            <ul>
              {pupils.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <small>02</small>
            <h3>Взрослым</h3>
            <ul>
              {adults.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="process" id="about">
        <div className="shell processGrid">
          <div>
            <p className="eyebrow">Как проходят занятия</p>
            <h2>
              Без зубрёжки.
              <br />
              <em>С пониманием.</em>
            </h2>
          </div>
          <div className="steps">
            <div>
              <i>1</i>
              <p>
                <b>Живые темы</b>
                Выбираем актуальные блоки на Edvibe с учётом интересов ученика.
              </p>
            </div>
            <div>
              <i>2</i>
              <p>
                <b>Понятная система</b>
                Разбираем темы через схемы и реальные примеры из жизни.
              </p>
            </div>
            <div>
              <i>3</i>
              <p>
                <b>Видимый результат</b>
                Материалы остаются на платформе, а прогресс фиксируется в
                трекере.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about shell">
        <div>
          <p className="eyebrow">Обо мне</p>
          <h2 className="aboutTitle">
            <span>Профессионально</span>
            <span>и по-человечески</span>
          </h2>
        </div>
        <div>
          <p>
            У меня высшее образование по направлению «Теория, методика и
            преподавание иностранных языков». Я работала в онлайн- и
            офлайн-школах, проводила разговорные клубы и регулярно прохожу
            Refresher Course по методике преподавания.
          </p>
          <p>
            На подготовке к Cambridge мы разбираем структуру экзамена, типы
            заданий и стратегии выполнения.
          </p>
        </div>
      </section>

      <section className="cta shell">
        <p className="eyebrow">Начнём со знакомства</p>
        <h2>
          Узнайте свой уровень
          <br />и получите <em>план обучения</em>
        </h2>
        <p>
          На бесплатной 30-минутной диагностике определим сложности, цель и
          подходящий формат занятий.
        </p>
        <TelegramLink className="button">
          Написать Лине в Telegram ↗
        </TelegramLink>
      </section>

      <footer className="shell">
        <a className="brand" href="#top">
          Lina<span>.</span>English
        </a>
        <p>Английский для жизни, учёбы и работы</p>
        <TelegramLink>@LinaCarolina19 ↗</TelegramLink>
      </footer>
    </main>
  );
}
