import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { StructuredData } from "@/components/StructuredData";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "岸 美江 Founder Story",
  description:
    "Puppily Founder 岸美江が語る、命の尊厳を守り、医療・美容・食・記憶と記録をひとつにつなぐPuppilyの原点。",
  alternates: { canonical: "/founder-story" },
};

const sections = [
  {
    heading: "すべては、小さな命を守るために。",
    paragraphs: [
      "私がPuppilyを始めた原点には、ずっと変わらないひとつの想いがあります。",
      "この子たちを、決して「モノ」として扱いたくない。",
      "私にとって、犬たちはペットではありません。大切な家族であり、私たちと同じ、尊厳を持った命です。",
      "だから私は、「犬だから、このくらいでいい」という考え方をしたくありませんでした。",
      "美容も、医療も、食事も。人の世界で大切にされていることを、この小さな子供たちにも、できる限り同じように届けたい。",
      "それがPuppilyの始まりです。",
    ],
  },
  {
    heading: "「可愛くする」だけでは終わらない場所へ",
    paragraphs: [
      "2013年、Puppily Hillsを始めました。",
      "もちろん、トリミングは最高に可愛く仕上げたい。",
      "でも、私がつくりたかったのは、ただ毛を切って帰るだけのトリミングサロンではありませんでした。",
      "きれいになって、可愛いお洋服を選んで、素敵なセットで写真を撮って、「今日、楽しかったね」「こんなに可愛かったね」そう家族で話せる一日をつくりたかったのです。",
      "犬たちの一生は、私たち人間よりずっと短い。だからこそ、一緒に過ごした何気ない一日さえ、いつか、かけがえのない宝物になります。",
      "記憶に残す。そして、写真という記録にも残す。",
      "Puppily Hillsが大切にしている「体験」は、そこから生まれました。",
    ],
  },
  {
    heading: "美容の現場だからこそ、守れる命がある",
    paragraphs: [
      "トリマーは、日常的にその子の全身に触れます。",
      "皮膚の小さな変化。いつもとは違うしこり。体重や筋肉の変化。触られることを嫌がる場所。",
      "ご家族でも気づかなかった小さなサインに、トリミングだからこそ気づけることがあります。",
      "だったら、その気づきを「少し様子を見ましょう」で終わらせたくない。すぐに医療につなげられる場所にしたい。",
      "その想いは、Puppily Animal Hospitalへとつながっていきました。",
      "私は歯科医師として、人の医療に携わってきました。だからこそ動物医療にも、「動物だからここまで」という線を引きたくありません。",
      "命を診る以上、その命の尊厳に違いはない。",
      "美容と医療を別々に考えるのではなく、日常の小さな変化を見つけ、必要なときには医療へつなぐ。病気になってから治療するだけではなく、できるだけ早く気づき、守る。",
      "それが、私の考えるPuppilyの医療です。",
    ],
  },
  {
    heading: "そして「食べること」も、命を守ること",
    paragraphs: [
      "毎日必ず繰り返すもの。それが食事です。",
      "だから私は、食事を単なる「ドッグフード」として考えたくありませんでした。",
      "特にPuppilyに集まる小さな子供たちは、体そのものが小さい。だからこそ、その小さな身体に何を入れるのかを、もっと真剣に考えたい。",
      "原材料だけではなく、栄養、消化、代謝、そして身体の中でエネルギーを生み出す仕組みまで考える。",
      "その発想から生まれたのが、Puppily Delicaです。",
      "私たちが目指しているのは、ただ「おいしいごはん」をつくることではありません。毎日の食事から、この子たちの身体を支えること。",
      "美容で外側から触れ、医療で身体を診て、食事で毎日を支える。",
      "私の中では、この3つは最初から別々のものではありません。すべて、ひとつの命につながっています。",
    ],
  },
  {
    heading: "愛と科学で、子供達とご家族の幸せをつくる",
    paragraphs: [
      "Puppily Hills。Puppily Animal Hospital。Puppily Delica。形は違っても、目指している場所は同じです。",
      "愛と科学で、子供達とご家族の幸せをつくる。",
      "可愛くなった一日も。病気を早く見つけられた日も。おいしそうにごはんを食べてくれた時間も。家族みんなで撮った一枚の写真も。",
      "そのすべてが、その子の人生です。",
      "私は、犬たちを商品としてではなく、ひとつの尊厳ある命として大切にする社会をつくりたいと思っています。",
      "そして、一日でも長く生きることだけではなく、その子が生きた一日一日が、幸せで、楽しくて、愛された時間であってほしい。",
      "いつか振り返ったとき、「この子と家族になれて、本当によかった」そう思える記憶と記録を、少しでも多く残したい。",
      "それが、私がPuppilyを続ける理由です。",
    ],
  },
] as const;

export default function FounderStoryPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "TOP", path: "/" },
          { name: "ABOUT", path: "/about" },
          { name: "Founder Story", path: "/founder-story" },
        ])}
      />

      <section className="bg-ivory">
        <Container className="py-16 text-center sm:py-24">
          <p className="font-display text-sm tracking-[0.3em] text-charcoal-soft/70">
            FOUNDER STORY
          </p>
          <h1 className="mt-4 font-heading text-[30px] leading-snug tracking-wide text-charcoal sm:text-4xl lg:text-[44px]">
            岸 美江 Founder Story
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-heading text-lg leading-[2] text-charcoal-soft sm:text-xl">
            すべては、小さな命を守るために。
          </p>
        </Container>
      </section>

      <article className="bg-white">
        <Container className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            {sections.map((section, index) => (
              <section
                key={section.heading}
                className={index === 0 ? "" : "mt-16 border-t border-line pt-16 sm:mt-24 sm:pt-24"}
              >
                <h2 className="font-heading text-2xl leading-[1.7] tracking-wide text-charcoal sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-8 space-y-6 text-[15px] leading-[2.15] text-charcoal-soft sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <div className="mt-16 border-t border-line pt-10 text-right sm:mt-24">
              <p className="text-sm tracking-[0.16em] text-charcoal-soft">Puppily Founder</p>
              <p className="mt-2 font-heading text-2xl tracking-[0.12em] text-charcoal">岸 美江</p>
            </div>
          </div>
        </Container>
      </article>

      <CtaBand
        heading={["愛と科学で、", "子供達とご家族の幸せをつくる。"]}
        buttons={[
          { label: "Puppily Hillsを知る", href: "/about", variant: "outline-light" },
          { label: "お問い合わせ", href: "/contact", variant: "outline-light" },
        ]}
      />
    </>
  );
}
