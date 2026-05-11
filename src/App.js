import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ContentProvider } from './context/ContentContext';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ContentProvider>
      <Router>
        <div className="App">
          <AnimatePresence>
            {loading && <LoadingScreen />}
          </AnimatePresence>
          {!loading && (
            <Routes>
              <Route path="/" element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              } />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
            </Routes>
          )}
        </div>
      </Router>
    </ContentProvider>
  );
}

export default App;
