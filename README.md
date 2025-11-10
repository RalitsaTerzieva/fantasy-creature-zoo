# 🐉 Fantasy Creature Zoo

A full-stack app to manage and explore magical creatures and their habitats.


## 🧰 Tech Stack
- **Frontend:** React, React Router DOM, Axios
- **Backend:** Node.js, Express, Sequelize
- **Database:** PostgreSQL

---

## 🚀 Features
- View all creatures in the zoo
- Add new magical creatures (via form)
- View detailed profile pages for each creature
- Manage habitats and associate creatures with them
- PostgreSQL + Sequelize ORM integration

## 🚀 How to Run

### 1️⃣ Setup database
```bash
CREATE DATABASE fantasy_zoo;
CREATE USER zoo_user WITH PASSWORD 'zoo_pass';
GRANT ALL PRIVILEGES ON DATABASE fantasy_zoo TO zoo_user;
```

## 2️⃣ Run backend

```bash
cd backend
npm install
npm run dev
```

## 3️⃣ Run frontend
```bash
cd frontend
npm install
npm run dev
```
