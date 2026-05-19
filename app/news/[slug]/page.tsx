const articles = [
    {
      slug: 'prison-outreach-kirikiri',
      title: 'YTF Conducts Successful Prison Outreach at Kirikiri',
      content:
        'Your Tomorrow Foundation conducted a meaningful outreach programme at Kirikiri Female Prison where essential supplies including sanitary products, food items, toiletries, and emotional support materials were distributed.',
      image: '/images/IMG-20260226-WA0000.jpg',
      date: 'February 2026',
      author: 'YTF Communications',
    },
  
    {
      slug: 'medical-outreach-programme',
      title: 'Medical Outreach Programme Reaches 500+ Beneficiaries',
      content:
        'The 2026 medical outreach programme provided free health screenings, consultations, medications, and awareness education to underserved communities.',
      image: '/images/medical_outreach.jpg',
      date: 'January 2026',
      author: 'Programme Team',
    },
  
    {
      slug: 'school-outreach-2026',
      title: 'School Outreach 2026: Equipping Students for Success',
      content:
        'Students received educational supplies, mentorship sessions, and inspirational talks designed to improve confidence and academic performance.',
      image: '/images/school_kids.jpg',
      date: 'January 2026',
      author: 'Education Team',
    },
    
    {
        slug: 'ramadan-feeding-programme',
        title: 'Ramadan Feeding Programme Launches Across Communities',
        content:
          'The Ramadan Feeding Programme was launched to support vulnerable families during the fasting season. Meals, food packs, and essential household items were distributed across multiple communities.',
        image: '/images/forest_walk.jpg',
        date: 'March 2026',
        author: 'Community Support Team',
      },
  ]
  
  export default function NewsArticlePage({
    params,
  }: {
    params: {
      slug: string
    }
  }) {
    const article = articles.find(
      (item) => item.slug === params.slug
    )
  
    if (!article) {
      return (
        <div className="pt-32 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Article Not Found
          </h1>
  
          <p className="text-gray-500">
            The article you are looking for does not exist.
          </p>
        </div>
      )
    }
  
    return (
      <main className="pt-32 pb-24">
        <div className="section-padding max-w-4xl mx-auto">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[450px] object-cover rounded-3xl mb-10"
          />
  
          <div className="flex gap-4 text-sm text-gray-500 mb-6">
            <span>{article.date}</span>
            <span>{article.author}</span>
          </div>
  
          <h1 className="text-5xl font-bold mb-8">
            {article.title}
          </h1>
  
          <div className="prose prose-lg max-w-none">
            <p>{article.content}</p>
          </div>
        </div>
      </main>
    )
  }