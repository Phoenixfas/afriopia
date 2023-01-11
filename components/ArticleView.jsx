import { useRouter } from "next/router";
import style from "../styles/Article.module.css";
import Image from "next/image";
// import ParticlesBackground from "./ParticlesBackground";
import { useQuery } from "@apollo/client";
import { GET_ARTICLE } from "../graphql/queries/articleQueries";

export default function ArticleView() {
    const router = useRouter();
    const { articleId } = router.query;

    const { loading, data, error } = useQuery(GET_ARTICLE, {
        variables: {
          id: articleId,
        },
      });
    
      // const article = articles.find((article) => article.id === articleId);
    
      if (loading)
        return (
          <p
            className={style.articleNoData}
            style={{ textAlign: "center", margin: "30px" }}
          >
            Loading...
          </p>
        );
      if (error)
        return (
          <p
            className={style.articletNoData}
            style={{ textAlign: "center", margin: "30px", color: "orangered" }}
          >
            Couldnt Fetch Article
          </p>
        );
      const article = data.article;


  return (
    <div className={style.article}>
      {/* <ParticlesBackground /> */}
      <ArticleViewInner article={article && article} />
    </div>
  )
}


const ArticleViewInner = ({ article }) => {
    return (
      <>
        {article && (
          <div className={style.articleHolder}>
            <h1 className={style.title}>{article.title}</h1>
            <Image
              src={article.image}
              alt={article.title}
              width={600}
              height={450}
              priority
              unoptimized
              quality={100}
            />
            <div className={style.articleContent}>
                <p className={style.article__date}>{new Date(parseInt(article.createdAt)).toDateString()}</p>
              <p>{article.desc}</p>
              <div
                className={style.article__body}
                dangerouslySetInnerHTML={{ __html: article.sanitizedHtml }}
              ></div>
            </div>
          </div>
        )}
      </>
    );
  };