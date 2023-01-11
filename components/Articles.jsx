import Image from "next/future/image"
import Link from "next/link"
import style from "../styles/Home.module.css"
import { useQuery } from "@apollo/client"
import { GET_ARTICLES } from "../graphql/queries/articleQueries"

export default function Articles() {
    const sample = [1, 2, 3];
    const { loading, error, data } = useQuery(GET_ARTICLES)
    if(loading) return(
        <div className={style.articles}>
            <div className={style.articles__title}>
                <h2>L<em className="a">a</em>test Tech News</h2>
            </div>
            <div className={style.articles__container}>

                {sample.map((sample, index) => (
                    <div className={style.articles__card__loading} key={index}>
                        <div className={style.articles__Img__loading}></div>
                        <div className={style.articles__content}>
                            <p className={style.articles__title__loading}></p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
    if(error) return(
        <div className={style.articles}>
            <div className={style.articles__title}>
                <h2>L<em className="a">a</em>test Tech News</h2>
            </div>
            <div className={style.articles__container}>
                <p style={{textAlign: "center"}}>Couldn&apos;t fetch articles</p>
            </div>
        </div>
    )
  return (
    <div className={style.articles}>
        <div className={style.articles__title}>
            <h2>L<em className="a" style={{textTransform: "lowercase"}}>a</em>test Tech News</h2>
        </div>
        <div className={style.articles__container}>

            {data.articles.length > 0 &&
            data?.articles.slice(data.articles.length - 3, data.articles.length).reverse().map((article) => (
                <div className={style.articles__card} key={article.id}>
                    <div className={style.articles__Img}>
                        <Image src={article.image} alt="client" width={400} height={250} quality={100} priority unoptimized={true} />
                    </div>
                    <div className={style.articles__content}>
                        <p className={style.articles__title}>{article.title.substr(0, 60) + "..."}</p>
                        {/* <p className={style.articles__desc}>{article.desc}</p> */}
                        <div className={style.articles__btnHolder}>
                            <Link href={`/articles/${article.id}`}>
                                <div className={style.articles__btn}>
                                    Read More
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            

        </div>
        <Link href="/articles_list">
            <div className={style.more__btn}>
                More
            </div>
        </Link>
    </div>
  )
}
