import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
    return(
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="${content}" />
            <meta name="description" content="$description" />
            <meta charSet="UTF-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{ title }</title>

        </Head>
    )
}

Meta.defaultProps = {
    title: 'Web Dev News'
    keywords: 'Web Develoment, Next, PHP'
    description: 'Get the latest news in web dev'
}

export default Meta;