'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingActions } from '@/components/floating-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

const BOT_TOKEN = '8751470623:AAHONN5hJz7k04_TGoC0GUBtKZk9eDMDnJI';
const CHAT_ID = '6047410688';

const courses = [
  { value: 'english-beginner', label: 'English - Beginner A1-A2' },
  { value: 'english-intermediate', label: 'English - Intermediate B1-B2' },
  { value: 'english-ielts', label: 'IELTS Preparation' },
  { value: 'it-backend-python', label: 'IT Backend - Python' },
  { value: 'it-backend-llm', label: 'IT Backend - LLM & NLP' },
  { value: 'it-frontend', label: 'IT Frontend - Web Development' },
  { value: 'sat', label: 'SAT Preparation' },
  { value: 'math', label: 'Mathematics' },
  { value: 'russian', label: 'Russian Language' },
];

export default function FreeLessonPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    type: 'student',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate form
      if (!formData.name || !formData.phone || !formData.course) {
        setError('Please fill in all required fields');
        setLoading(false);
        return;
      }

      // Find course name
      const courseName = courses.find(c => c.value === formData.course)?.label || formData.course;
      
      // Create message
      const message = `
🎓 **New Free Lesson Registration**

👤 **Name:** ${formData.name}
📱 **Phone:** ${formData.phone}
📚 **Course:** ${courseName}
👨‍👩‍👧 **Type:** ${formData.type === 'student' ? 'Student' : 'Parent/Guardian'}

Please contact this student to schedule their free lesson!
      `.trim();

      // Send to Telegram
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', phone: '', course: '', type: 'student' });
      
      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to submit. Please try again or contact us directly.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Book Your Free Lesson</h1>
            <p className="text-xl text-muted-foreground">
              Get a personalized introduction to IPE School. No commitments, just learning!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex gap-4"
              >
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-green-900 mb-1">Success!</h3>
                  <p className="text-green-800">
                    Your free lesson request has been sent. Our team will contact you soon!
                  </p>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg flex gap-4"
              >
                <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Error</h3>
                  <p className="text-red-800">{error}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+998 (XX) XXX-XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              {/* Course Selection */}
              <div>
                <Label htmlFor="course" className="mb-2 block">
                  Select Course *
                </Label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                >
                  <option value="">Choose a course...</option>
                  {courses.map(course => (
                    <option key={course.value} value={course.value}>
                      {course.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Selection */}
              <div>
                <Label className="mb-4 block">Who is registering? *</Label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="student"
                      checked={formData.type === 'student'}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-4 h-4"
                    />
                    <span>Student (myself)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="parent"
                      checked={formData.type === 'parent'}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-4 h-4"
                    />
                    <span>Parent/Guardian</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Book Free Lesson'}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Our team will contact you within 24 hours to confirm your free lesson time.
              </p>
            </form>
          </Card>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-center mb-8">What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '⏱️', title: '30 Min Session', desc: 'Personalized introduction to our teaching style' },
                { icon: '🎯', title: 'Assessment', desc: 'We evaluate your current level and goals' },
                { icon: '📋', title: 'Recommendations', desc: 'Tailored course suggestions just for you' },
              ].map((item, idx) => (
                <Card key={idx} className="p-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
