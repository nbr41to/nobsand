import Image from 'next/image';

export default function Page() {
  return (
    <div className="space-y-8 p-10">
      <div className="mx-auto w-fit space-y-3 py-10">
        <h2 className="text-3xl font-bold">
          Unlock the Magic of Reading. Books from Around the World Await!
        </h2>
        <p className="text-right text-xl font-bold">
          読書の魔力をあなたに。世界中の本がここに集結！
        </p>
      </div>

      <div className="mx-auto flex w-fit max-w-[1000px] justify-center gap-8">
        <p>
          Welcome to our online bookstore, designed for passionate book lovers
          like you. We offer a wide range of books spanning various genres and
          topics, providing a platform to expand your knowledge and ignite your
          imagination. From trending titles to timeless classics, you&apos;ll
          find any book you desire right here. Explore our special deals and
          exclusive offers, guaranteeing new discoveries with every purchase.
          Our secure payment methods and prompt delivery service ensure a
          hassle-free shopping experience. Indulge in the enchantment of books
          and embark on exciting new adventures in life. Join us today and start
          your literary journey!
        </p>
        <p>
          当サイトは、本好きな人々のための最高のオンライン書店です。世界中のさまざまなジャンルやテーマの本を取り揃えており、あなたの知識を広げ、想像力を刺激します。興味のあるトピックや著名な作家の最新作、古典的な名著まで、どんな本でも見つけることができます。また、お得なセールや限定特典もご用意しており、購入する度に新しい発見が待っています。安心してお買い物を楽しんでいただくため、安全な決済方法や迅速な配送サービスを提供しています。本の魅力を存分に味わい、人生に新たな冒険をもたらすために、ぜひ当サイトをご利用ください。
        </p>
      </div>

      <div className="relative mx-auto aspect-[5/4] max-w-[1000px] py-10">
        <Image
          src="https://picsum.photos/1000/800"
          // width={1000}
          // height={800}
          fill
          alt="Books"
        />
      </div>
    </div>
  );
}
