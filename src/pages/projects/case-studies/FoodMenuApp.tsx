import { Link } from 'react-router-dom'

const FoodMenuApp = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 md:px-12">
      {/* Hero Section */}
      <div className="py-12 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
          Digital Food Menu App
        </h1>
        <p className="text-2xl text-primary-dark/80 mb-8 leading-relaxed">
          Innovative Digital Menu Solution for Restaurants
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
              Overview
            </h3>
            <p className="text-primary-dark/80">
              An innovative digital food menu app tailored for restaurants, fast-food joints, 
              bars, and coffee shops that simplifies ordering and streamlines operations.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
              My Role
            </h3>
            <p className="text-primary-dark/80">
              Played a key role as a product designer in developing the app, focusing on 
              creating an intuitive user experience that benefits both customers and 
              restaurant staff.
            </p>
          </div>
        </div>
      </div>

      {/* Project Overview Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Project Overview
        </h2>
        <div className="prose prose-lg max-w-none text-primary-dark/80 leading-relaxed">
          <p className="text-lg mb-6">
            As a product designer, I played a key role in developing an innovative digital 
            food menu tailored for restaurants, fast-food joints, bars, and coffee shops. 
            This digital menu app simplifies the ordering process for customers, allowing 
            them to effortlessly browse menus and place orders from their seats.
          </p>
          <p className="text-lg mb-6">
            Not only does it enhance the customer experience, but it also streamlines operations 
            for restaurant owners. The elimination of paper menus reduces costs and facilitates 
            instant updates on menu changes or price adjustments.
          </p>
          <p className="text-lg">
            Waitstaff benefit from the seamless order submission process, freeing them from 
            the task of manually recording orders. The app is designed to revolutionize the 
            dining experience, making it more efficient for both customers and establishments.
          </p>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Designed for Multiple Venue Types
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6 border border-secondary/20">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Restaurants
            </h3>
            <p className="text-primary-dark/80">
              Full-service restaurants benefit from streamlined ordering and reduced waitstaff 
              workload, allowing them to focus on providing excellent customer service.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-secondary/20">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Fast-Food Joints
            </h3>
            <p className="text-primary-dark/80">
              Quick-service establishments can process orders faster and reduce queue times, 
              improving throughput and customer satisfaction.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-secondary/20">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Bars & Coffee Shops
            </h3>
            <p className="text-primary-dark/80">
              Smaller venues benefit from the cost savings of eliminating paper menus while 
              maintaining a modern, tech-forward brand image.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-secondary/20">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Multi-Location Chains
            </h3>
            <p className="text-primary-dark/80">
              Chain establishments can instantly update menus across all locations, ensuring 
              consistency and reducing administrative overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Key Benefits
        </h2>
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 border border-secondary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              For Customers
            </h3>
            <ul className="space-y-2 text-primary-dark/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
                <span>Effortlessly browse menus and place orders from their seats</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
                <span>40% reduction in customer ordering time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
                <span>Enhanced decision-making with clear menu information and visuals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
                <span>Improved overall dining experience</span>
              </li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-secondary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              For Restaurant Owners
            </h3>
            <ul className="space-y-2 text-primary-dark/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
                <span>Elimination of paper menus reduces costs significantly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
                <span>Instant updates on menu changes or price adjustments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
                <span>Streamlined operations and improved efficiency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
                <span>Better inventory management through order tracking</span>
              </li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-secondary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              For Waitstaff
            </h3>
            <ul className="space-y-2 text-primary-dark/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
                <span>Seamless order submission process eliminates manual recording</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
                <span>More time to focus on customer service and hospitality</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
                <span>Reduced errors in order taking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
                <span>Improved workflow efficiency</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Results Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Key Results
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6 border border-secondary/20">
            <div className="text-4xl font-extrabold text-secondary mb-2">40%</div>
            <p className="text-primary-dark/80 font-medium">
              Reduction in customer ordering time
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-secondary/20">
            <div className="text-4xl font-extrabold text-secondary mb-2">100%</div>
            <p className="text-primary-dark/80 font-medium">
              Elimination of paper menu costs
            </p>
          </div>
        </div>
        <div className="mt-6 glass rounded-2xl p-6 border border-secondary/10">
          <p className="text-primary-dark/80">
            The app successfully revolutionized the dining experience by making it more efficient 
            for both customers and establishments. Through streamlined operations, cost reductions, 
            and improved user experience, the digital menu app transformed how restaurants interact 
            with their customers.
          </p>
        </div>
      </section>

      {/* Design Approach Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Design Approach
        </h2>
        <div className="glass rounded-2xl p-6 border border-secondary/10">
          <p className="text-primary-dark/80 mb-4">
            The design process focused on creating an intuitive interface that serves multiple 
            stakeholders effectively:
          </p>
          <ul className="space-y-2 text-primary-dark/80 list-disc list-inside">
            <li>User-centered design prioritizing customer ease of use</li>
            <li>Streamlined user flows through research and iterative testing</li>
            <li>Mobile-first approach ensuring optimal performance on all devices</li>
            <li>Scalable architecture supporting various venue types and sizes</li>
            <li>Real-time update capabilities for instant menu changes</li>
          </ul>
        </div>
      </section>

      {/* Back to Projects */}
      <div className="mt-20 mb-12 text-center">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to All Projects</span>
        </Link>
      </div>
    </div>
  )
}

export default FoodMenuApp

