import { useMemo, useState } from "react";
import heroRoof from "@/assets/hero-roof.jpg";
import caseSeam from "@/assets/case-seam.jpg";
import caseHouse from "@/assets/case-house.jpg";
import caseTile from "@/assets/case-tile.jpg";
import teamGear from "@/assets/team-gear.jpg";
import materials from "@/assets/materials.jpg";

const trust = [
  "гарантия 5+ лет",
  "сертифицированные материалы",
  "договор",
  "своя бригада, не подряд",
];

const cases = [
  { img: caseSeam, title: "Фальцевая кровля", meta: "180 м² · оцинк. сталь · 9 дней", price: "от 2 350 ₽/м²" },
  { img: caseHouse, title: "Замена кровли частного дома", meta: "240 м² · мягкая черепица · 12 дней", price: "от 1 980 ₽/м²" },
  { img: caseTile, title: "Композитная черепица", meta: "160 м² · металлочерепица · 7 дней", price: "от 2 540 ₽/м²" },
];

const stages = [
  { n: "01", t: "Замер", d: "Бесплатно выезжаем на объект, делаем обмер и фотофиксацию." },
  { n: "02", t: "Проект и смета", d: "Считаем материалы и работы. Фиксируем цену в договоре." },
  { n: "03", t: "Монтаж", d: "Своя бригада, без посредников. Соблюдаем технологию производителя." },
  { n: "04", t: "Гарантия", d: "Подписываем акт, даём гарантию 5+ лет на работы." },
];

const reviews = [
  { name: "Алексей М.", area: "Москва, СВАО", text: "Перекрыли крышу дома 220 м². Уложились в смету и срок, на стыках всё аккуратно. Через зиму — без подтёков." },
  { name: "Ирина К.", area: "Москва, ЗАО", text: "Сделали замер быстро, объяснили по материалам без навязывания. Монтаж бригада закончила за 8 дней." },
  { name: "Дмитрий В.", area: "Москва, ЮВАО", text: "Брали под ремонт кровли гаража и пристройки. Договор подписали, всё по пунктам, цена не выросла." },
];

const materialPrice: Record<string, number> = {
  "Металлочерепица": 1500,
  "Мягкая черепица": 1800,
  "Фальц оцинкованный": 2100,
  "Композитная черепица": 2600,
};

const Index = () => {
  const [type, setType] = useState("Скатная");
  const [material, setMaterial] = useState("Металлочерепица");
  const [area, setArea] = useState(120);

  const estimate = useMemo(() => {
    const base = materialPrice[material] ?? 1500;
    const k = type === "Сложная (мансарда, ендовы)" ? 1.25 : type === "Плоская" ? 0.85 : 1;
    const total = Math.round(base * k * area);
    return total;
  }, [type, material, area]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display text-xl">РН</span>
            <span className="font-display text-xl tracking-wide">РЕСТАВРАЦИЯ Н</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#calc" className="hover:text-foreground">Калькулятор</a>
            <a href="#cases" className="hover:text-foreground">Кейсы</a>
            <a href="#stages" className="hover:text-foreground">Этапы</a>
            <a href="#reviews" className="hover:text-foreground">Отзывы</a>
          </nav>
          <a href="tel:+74955429999" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
            8 (495) 542-99-99
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="container grid gap-10 py-12 md:grid-cols-[1.1fr_1fr] md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" /> Москва · 5 лет на рынке кровли
            </div>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] md:text-7xl text-balance">
              Кровля под ключ <br /><span className="text-primary">с гарантией 5+ лет</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Монтаж и ремонт скатных и плоских кровель в Москве и области.
              Замер бесплатно, цена в договоре, своя бригада — без подряда.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#calc" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] hover:opacity-90">
                Рассчитать стоимость
              </a>
              <a href="#lead" className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold hover:bg-surface-elevated">
                Заказать бесплатный замер
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-2 text-muted-foreground">
                  <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l4 4L19 6" /></svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 grid-lines opacity-40" />
            <img
              src={heroRoof}
              alt="Монтаж фальцевой кровли в Москве"
              width={1536}
              height={1024}
              className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-border"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-lg border border-border bg-surface-elevated p-4 shadow-xl sm:block">
              <div className="font-display text-3xl text-primary">5+ лет</div>
              <div className="text-xs text-muted-foreground">опыт работы в Москве</div>
            </div>
            <div className="absolute -right-3 -top-3 hidden rounded-lg border border-border bg-surface-elevated p-3 sm:block">
              <div className="text-xs text-muted-foreground">Договор · Гарантия</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calc" className="border-y border-border bg-surface">
        <div className="container grid gap-10 py-16 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Калькулятор кровли</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Ориентир «под ключ» с материалом и работой. Точную смету фиксируем после замера — без скрытых доплат.
            </p>
            <AnimatedRoof />
          </div>

          <div className="rounded-xl border border-border bg-background p-6 md:p-8">
            <Field label="Тип кровли">
              <div className="grid grid-cols-3 gap-2">
                {["Скатная", "Плоская", "Сложная (мансарда, ендовы)"].map((o) => (
                  <button
                    key={o}
                    onClick={() => setType(o)}
                    className={`rounded-md border px-3 py-2 text-xs ${type === o ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:text-foreground"}`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Материал">
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(materialPrice).map((o) => (
                  <button
                    key={o}
                    onClick={() => setMaterial(o)}
                    className={`rounded-md border px-3 py-2 text-sm ${material === o ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:text-foreground"}`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </Field>

            <Field label={`Площадь крыши: ${area} м²`}>
              <input
                type="range"
                min={40}
                max={500}
                step={10}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[hsl(var(--primary))]"
              />
            </Field>

            <div className="mt-6 flex items-end justify-between rounded-lg border border-border bg-surface-elevated p-5">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Ориентир «под ключ»</div>
                <div className="mt-1 font-display text-4xl text-primary">
                  {estimate.toLocaleString("ru-RU")} ₽
                </div>
                <div className="text-xs text-muted-foreground">материал + работа, без вывоза мусора</div>
              </div>
              <a href="#lead" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
                Уточнить смету
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="container py-16">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl md:text-5xl">Кейсы по Москве и области</h2>
          <span className="hidden text-sm text-muted-foreground sm:block">материал · сроки · цена</span>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="group overflow-hidden rounded-xl border border-border bg-surface">
              <div className="overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" width={1024} height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl">{c.title}</h3>
                <div className="mt-1 text-xs text-muted-foreground">{c.meta}</div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {c.price}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stages */}
      <section id="stages" className="border-y border-border bg-surface">
        <div className="container py-16">
          <h2 className="font-display text-4xl md:text-5xl">Этапы работы</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">От заявки до подписания акта — четыре прозрачных шага.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {stages.map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-background p-5">
                <div className="font-display text-3xl text-accent">{s.n}</div>
                <div className="mt-2 font-display text-xl">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="container grid gap-10 py-16 md:grid-cols-2 md:items-center">
        <img src={materials} alt="Сертифицированные кровельные материалы" loading="lazy" width={1024} height={768}
          className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-border" />
        <div>
          <h2 className="font-display text-4xl md:text-5xl">Гарантия и материалы</h2>
          <p className="mt-3 text-muted-foreground">
            Работаем только с сертифицированными материалами проверенных производителей.
            На монтажные работы даём гарантию от 5 лет. Все условия фиксируются в договоре.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Договор с фиксированной ценой и сроком",
              "Гарантия на работы 5+ лет, на материал — по сертификату производителя",
              "Соблюдение технологии монтажа и узлов",
              "Уборка объекта после сдачи",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="border-y border-border bg-surface">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Своя бригада и техника</h2>
            <p className="mt-3 text-muted-foreground">
              Постоянный состав монтажников с опытом от 5 лет. Не передаём объект на сторонний подряд —
              отвечаем за результат сами. На объекте: страховка высотных работ, профессиональный
              фальцевый и кровельный инструмент.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <Stat n="5+" t="лет на рынке" />
              <Stat n="120+" t="объектов" />
              <Stat n="0" t="сторонних подрядов" />
            </div>
          </div>
          <img src={teamGear} alt="Бригада и оборудование на объекте" loading="lazy" width={1280} height={832}
            className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-border" />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="container py-16">
        <h2 className="font-display text-4xl md:text-5xl">Отзывы заказчиков</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">Москва и ближайшее Подмосковье. Имена и районы — по согласованию с клиентами.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.name} className="rounded-xl border border-border bg-surface p-6">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z"/></svg>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">«{r.text}»</p>
              <footer className="mt-4 text-xs text-muted-foreground">{r.name} · {r.area}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Lead form */}
      <section id="lead" className="border-t border-border bg-surface">
        <div className="container grid gap-10 py-16 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Бесплатный замер<br/>и расчёт сметы</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Оставьте телефон — перезвоним в течение рабочего часа, согласуем удобное время выезда по Москве и области.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>· Замер и смета — бесплатно</li>
              <li>· Без давления и навязывания</li>
              <li>· Договор перед началом работ</li>
            </ul>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Заявка отправлена. Перезвоним в течение рабочего часа.");
            }}
            className="rounded-xl border border-border bg-background p-6 md:p-8"
          >
            <div className="grid gap-4">
              <label className="text-sm">
                <span className="mb-1 block text-muted-foreground">Имя</span>
                <input required className="w-full rounded-md border border-border bg-surface px-3 py-2.5 outline-none focus:border-primary" placeholder="Как к вам обращаться" />
              </label>
              <label className="text-sm">
                <span className="mb-1 block text-muted-foreground">Телефон</span>
                <input required type="tel" className="w-full rounded-md border border-border bg-surface px-3 py-2.5 outline-none focus:border-primary" placeholder="+7 (___) ___-__-__" />
              </label>
              <label className="text-sm">
                <span className="mb-1 block text-muted-foreground">Адрес объекта (необязательно)</span>
                <input className="w-full rounded-md border border-border bg-surface px-3 py-2.5 outline-none focus:border-primary" placeholder="Москва или область" />
              </label>
              <label className="text-sm">
                <span className="mb-1 block text-muted-foreground">Комментарий</span>
                <textarea rows={3} className="w-full rounded-md border border-border bg-surface px-3 py-2.5 outline-none focus:border-primary" placeholder="Тип кровли, площадь, сроки" />
              </label>
              <button type="submit" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                Заказать бесплатный замер
              </button>
              <p className="text-xs text-muted-foreground">Отправляя форму, вы соглашаетесь на обработку персональных данных.</p>
            </div>
          </form>
        </div>
      </section>

      {/* Contacts + Map */}
      <section id="contacts" className="container grid gap-8 py-16 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="font-display text-4xl md:text-5xl">Контакты</h2>
          <div className="mt-6 space-y-4 text-sm">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Адрес</div>
              <div className="mt-1">ул. Усачева, 1с1, Москва, 119146</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Телефон</div>
              <a href="tel:+74955429999" className="mt-1 block font-display text-2xl text-primary">8 (495) 542-99-99</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
              <a href="mailto:support@my-gkh.ru" className="mt-1 block">support@my-gkh.ru</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">График</div>
              <div className="mt-1">Пн–Сб 9:00–20:00, выезд на замер по согласованию</div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <iframe
            title="Карта: ул. Усачева, 1с1, Москва"
            src="https://yandex.ru/map-widget/v1/?ll=37.572%2C55.728&z=16&mode=search&text=%D1%83%D0%BB.%20%D0%A3%D1%81%D0%B0%D1%87%D0%B5%D0%B2%D0%B0%2C%201%D1%811%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
            className="h-[360px] w-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="container flex flex-col items-start justify-between gap-3 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} РЕСТАВРАЦИЯ Н · Кровельные работы в Москве</div>
          <div>ул. Усачева, 1с1, Москва · 8 (495) 542-99-99</div>
        </div>
      </footer>
    </div>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="mt-5 first:mt-0">
    <div className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    {children}
  </div>
);

const Stat = ({ n, t }: { n: string; t: string }) => (
  <div className="rounded-lg border border-border bg-background p-4">
    <div className="font-display text-3xl text-primary">{n}</div>
    <div className="text-xs text-muted-foreground">{t}</div>
  </div>
);

const AnimatedRoof = () => (
  <div className="mt-8 rounded-xl border border-border bg-background p-5">
    <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">Как мы укладываем кровлю</div>
    <svg viewBox="0 0 320 140" className="anim-roof w-full" aria-hidden="true">
      {/* House outline */}
      <path
        className="outline"
        d="M20 120 L20 70 L160 20 L300 70 L300 120 Z"
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Tiles */}
      {Array.from({ length: 18 }).map((_, i) => {
        const cols = 9;
        const row = Math.floor(i / cols);
        const col = i % cols;
        return (
          <rect
            key={i}
            className="tile"
            x={45 + col * 26}
            y={55 + row * 18}
            width="22"
            height="14"
            rx="2"
            fill="hsl(var(--primary))"
            style={{ animationDelay: `${0.6 + i * 0.06}s` }}
          />
        );
      })}
      {/* Sparks at seam */}
      <circle className="spark" cx="160" cy="40" r="2.5" fill="hsl(var(--accent))" />
      <circle className="spark" cx="200" cy="55" r="2" fill="hsl(var(--accent))" style={{ animationDelay: "0.6s" }} />
      <circle className="spark" cx="120" cy="55" r="2" fill="hsl(var(--accent))" style={{ animationDelay: "1.2s" }} />
    </svg>
    <div className="mt-2 grid grid-cols-4 text-center text-[11px] text-muted-foreground">
      <span>Замер</span><span>Проект</span><span>Монтаж</span><span>Гарантия</span>
    </div>
  </div>
);

export default Index;
