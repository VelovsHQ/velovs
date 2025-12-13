# Velovs & Co. - Technology Stack

## 🚀 Overview
Velovs & Co. is built with a modern, AI-first architecture that separates frontend and backend for scalability and performance.

---

## 📚 Tech Stack

### **Frontend**
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **UI Framework:** React 18+
- **Styling:** Tailwind CSS
- **State Management:** React Context / Zustand (as needed)
- **API Client:** Axios / Fetch API

### **Backend**
- **Framework:** FastAPI (Python 3.11+)
- **Language:** Python
- **API Documentation:** Auto-generated with Swagger/OpenAPI
- **Authentication:** JWT tokens
- **Async Support:** asyncio for high-performance async operations

### **AI/ML Layer**
- **AI Framework:** LangChain / LlamaIndex
- **Vector Operations:** NumPy, scikit-learn
- **Model Integration:** OpenAI API, Anthropic Claude API, Hugging Face
- **Vector Search:** pgvector for semantic search

### **Database**
- **Primary DB:** PostgreSQL 15+
- **Vector Extension:** pgvector
- **ORM:** SQLAlchemy (Python side)
- **Migrations:** Alembic

### **Content Management**
- **CMS:** Sanity / Contentful / Strapi (choose one)
- **Integration:** Headless CMS with API access

### **DevOps & Deployment**
- **Frontend Hosting:** Vercel / Netlify
- **Backend Hosting:** Railway / AWS / Google Cloud Run
- **Database Hosting:** Supabase / Railway / AWS RDS
- **CI/CD:** GitHub Actions
- **Containerization:** Docker

---

## 📁 Recommended Folder Structure

### **Option 1: Monorepo (Recommended for small-medium teams)**

```
velovs-platform/
├── frontend/                # Next.js application
│   ├── src/
│   │   ├── app/            # Next.js 14 App Router
│   │   │   ├── (auth)/     # Auth-related pages
│   │   │   ├── (dashboard)/# Dashboard pages
│   │   │   ├── api/        # API routes (proxy to backend)
│   │   │   └── layout.tsx
│   │   ├── components/     # Reusable React components
│   │   │   ├── ui/         # Basic UI components
│   │   │   └── features/   # Feature-specific components
│   │   ├── lib/            # Utilities and helpers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── types/          # TypeScript types
│   │   └── styles/         # Global styles
│   ├── public/             # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.js
│
├── backend/                 # Python FastAPI application
│   ├── app/
│   │   ├── api/            # API endpoints
│   │   │   ├── v1/         # API version 1
│   │   │   │   ├── endpoints/
│   │   │   │   │   ├── auth.py
│   │   │   │   │   ├── users.py
│   │   │   │   │   └── ai.py
│   │   │   │   └── api.py  # API router
│   │   │   └── deps.py     # Dependencies
│   │   ├── core/           # Core functionality
│   │   │   ├── config.py   # Settings
│   │   │   ├── security.py # Auth & security
│   │   │   └── database.py # DB connection
│   │   ├── models/         # SQLAlchemy models
│   │   ├── schemas/        # Pydantic schemas
│   │   ├── services/       # Business logic
│   │   │   ├── ai_service.py
│   │   │   └── vector_service.py
│   │   ├── utils/          # Helper functions
│   │   └── main.py         # FastAPI app entry
│   ├── alembic/            # Database migrations
│   ├── tests/              # Backend tests
│   ├── requirements.txt    # Python dependencies
│   ├── Dockerfile
│   └── .env.example
│
├── shared/                  # Shared types/constants
│   └── types.ts            # Shared TypeScript types
│
├── docs/                    # Documentation
│   ├── API.md              # API documentation
│   ├── SETUP.md            # Setup instructions
│   └── DEPLOYMENT.md       # Deployment guide
│
├── .github/
│   └── workflows/          # CI/CD workflows
│       ├── frontend.yml
│       └── backend.yml
│
├── docker-compose.yml      # Local development setup
├── README.md               # This file
└── .gitignore
```

### **Option 2: Separate Repositories**

If you prefer separate repos:
- `velovs-frontend` - Next.js app
- `velovs-backend` - FastAPI app
- `velovs-shared` - Shared types/utilities

---

## 🔧 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Python 3.11+
- PostgreSQL 15+
- Docker (optional, for local development)

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Database Setup
```bash
# Install pgvector extension
psql -U postgres -c "CREATE EXTENSION vector;"

# Run migrations
cd backend
alembic upgrade head
```

---

## 🔐 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/velovs
SECRET_KEY=your-secret-key
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
```

---

## 🚢 Deployment

- **Frontend:** Deploy to Vercel with automatic GitHub integration
- **Backend:** Deploy to Railway/AWS with Docker
- **Database:** Managed PostgreSQL on Supabase/Railway/AWS RDS

---

## 👥 Team Guidelines

1. **Frontend devs:** Work in `frontend/` directory
2. **Backend/AI devs:** Work in `backend/` directory
3. **Shared types:** Update `shared/types.ts` when API changes
4. **Always test locally** with Docker Compose before pushing
5. **API changes:** Update `docs/API.md` documentation

---

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [PostgreSQL pgvector](https://github.com/pgvector/pgvector)
- [LangChain Documentation](https://python.langchain.com/)

---

**Questions?** Contact the tech lead or check the `docs/` folder for detailed guides.