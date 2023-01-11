import Image from 'next/future/image'
import Link from 'next/link'
import style from '../styles/ArticlesList.module.css'
import { useQuery } from "@apollo/client"
import { GET_ARTICLES } from "../graphql/queries/articleQueries"

export default function ArticleList() {
    const sample = [1, 2, 3];
    const { loading, error, data } = useQuery(GET_ARTICLES)
    if(loading) return(
        <div className={style.articles}>
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
            <div className={style.articles__container}>
                <p style={{textAlign: "center"}}>Couldn&apos;t fetch articles</p>
            </div>
        </div>
    )
  return (
    <div className={style.articles}>
        <div className={style.articles__container}>

            {data.articles.length > 0 &&
            data?.articles.slice(0).reverse().map((article) => (
                <div className={style.articles__card} key={article.id}>
                    <div className={style.articles__Img}>
                        <Image src={article.image} alt="client" width={400} height={250} quality={100} priority unoptimized={true} />
                    </div>
                    <div className={style.articles__content}>
                        <p className={style.articles__title}>{article.title.length > 100 ? `${article.title.substr(0, 100)}...` : article.title}</p>
                        <p className={style.articles__desc}>{article.desc.length > 200 ? `${article.desc.substr(0, 200)}...` : article.desc}</p>
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
    </div>
  )
}
// .slice(data.articles.length - 3, data.articles.length)