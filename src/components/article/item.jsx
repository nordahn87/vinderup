const ArticleItem = (props) => {
    return (
        <>
            <section id={props.id} className='article-container mt-5'>
                <img
                    src={props.src}
                    width='1366'
                    height='960'
                    alt={props.alt}
                />
                <article className='article-container-textbox'>
                    <h3 className='font-permanent-marker uppercase font-semibold tracking-widest  text-primary mb-4 text-2xl 3xsm:text-4xl xsm:text-5xl mdlg:text-4xl lg:text-5xl'>
                        {props.headline}
                    </h3>
                    <p className='article-container-textbox-year'>
                        Årstal: {props.year}
                    </p>
                    <p>{props.text}</p>
                </article>
            </section>
        </>
    )
}

export default ArticleItem
