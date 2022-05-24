import { useEffect, useState } from 'react';
import ArticleItem from './article/item';
import ArticleItemsData from '../.data/article-items';
import CardItem from './card-item';
import CardItemsData from '../.data/card-items';

const Articles = () => {

    const [sliceAmount, setSliceAmount] = useState(3)

    useEffect(() => {
        const elements = document.querySelectorAll(".article-container");
        const textboxes = document.querySelectorAll(".article-container-textbox");
        let currentIndex = 0;

        window.addEventListener("scroll", () => {
            const textbox = textboxes[currentIndex];
            const element = elements[currentIndex];
            if (currentIndex > textboxes.length - 1) {
                return;
            }

            const rect = element.getBoundingClientRect();
            if (rect.bottom < window.innerHeight && window.innerWidth > 767) {
                element.classList.add("article-active");
                textbox.classList.add("textbox-active");
                currentIndex++;
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth < 768) {
                setSliceAmount(2)
            } else {
                setSliceAmount(3)
            }
        })
    });

    return (
        <>
            <main className="w-full max-w-screen-xl my-0 mx-auto">
                {ArticleItemsData.slice(0, 3).map((item, index) => {
                    return (
                        <ArticleItem
                            key={index}
                            id={item.id}
                            src={item.src}
                            alt={item.alt}
                            headline={item.headline}
                            year={item.year}
                            text={item.text} />
                    )
                })}

                <section className="grid md:grid-cols-3 grid-cols-2 gap-x-5">
                    {CardItemsData.slice(0, sliceAmount).map((item, index) => {
                        return (
                            <CardItem
                                key={index}
                                src={item.src}
                                alt={item.alt} />
                        )
                    })}
                </section>

                {ArticleItemsData.slice(3, 5).map((item, index) => {
                    return (
                        <ArticleItem
                            key={index}
                            id={item.id}
                            src={item.src}
                            alt={item.alt}
                            headline={item.headline}
                            year={item.year}
                            text={item.text} />
                    )
                })}
            </main>
        </>
    );
}

export default Articles;
