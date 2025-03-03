import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

export default function AdminDashboard({ handleLogout }) {
  // Existing lists: clients, plans, exercises
  const [clients, setClients] = useState([]);
  const [plans, setPlans] = useState([]);
  const [exercises, setExercises] = useState([]);
  
  // State for adding training to a plan
  const [selectedPlanForTraining, setSelectedPlanForTraining] = useState('');
  const [newTraining, setNewTraining] = useState({
    naziv_nedelje: '',
    trening_dan: '',
    vezba_naziv: '',
    tezina: '',
    broj_ponavljanja: '',
    napomena: ''
  });
  const [trainingMessage, setTrainingMessage] = useState('');
  
  // State for creating a new plan
  const [newPlanName, setNewPlanName] = useState('');
  const [planMessage, setPlanMessage] = useState('');
  
  // State for assigning a plan to a client
  const [selectedClientForPlan, setSelectedClientForPlan] = useState('');
  const [selectedPlanForAssignment, setSelectedPlanForAssignment] = useState('');
  const [assignMessage, setAssignMessage] = useState('');
  
  // State for assigning a meal plan to a client
  const [selectedClientForMealPlan, setSelectedClientForMealPlan] = useState('');
  const [mealPlanLink, setMealPlanLink] = useState('');
  const [mealPlanMessage, setMealPlanMessage] = useState('');
  
  // State for deleting an existing plan (from the plan table)
  const [selectedPlanForDeletion, setSelectedPlanForDeletion] = useState('');
  const [deletePlanMessage, setDeletePlanMessage] = useState('');
  
  // State for creating a new client
  const [newClient, setNewClient] = useState({
    ime: '',
    prezime: '',
    email: '',
    lozinka: '',
    obavestiKlijenta: true
  });
  const [clientMessage, setClientMessage] = useState('');
  
  // State for deleting a client
  const [deleteEmail, setDeleteEmail] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  
  // Fetch all data when component mounts
    // NEW STATES FOR BLOG MANAGEMENT
    const [blogs, setBlogs] = useState([]); // list of blog posts (for deletion)
    const [blogData, setBlogData] = useState({
      title: '',
      preview_text: '',
      blog_text: ''
    });
    const [blogFile, setBlogFile] = useState(null);
    const [blogMessage, setBlogMessage] = useState('');
    const [selectedBlogForDeletion, setSelectedBlogForDeletion] = useState('');
    const [deleteBlogMessage, setDeleteBlogMessage] = useState('');
  
    // Fetch data when component mounts (include blogs)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const clientsRes = await axios.get('http://localhost:5000/api/admin/clients');
          setClients(clientsRes.data.clients);
          const plansRes = await axios.get('http://localhost:5000/api/admin/plans');
          setPlans(plansRes.data.plans);
          const exercisesRes = await axios.get('http://localhost:5000/api/admin/exercises');
          setExercises(exercisesRes.data.exercises);
          const blogsRes = await axios.get('http://localhost:5000/api/blog/blogs-all'); // Adjust endpoint as needed
          setBlogs(blogsRes.data.blogs);
        } catch (err) {
          console.error('Error fetching data:', err);
        }
      };
      fetchData();
    }, []);
  
    // Handlers for blog creation
    const handleBlogInputChange = (e) => {
      setBlogData({ ...blogData, [e.target.name]: e.target.value });
    };
  
    const handleBlogFileChange = (e) => {
      setBlogFile(e.target.files[0]);
    };
  
    const handleBlogSubmit = async (e) => {
      e.preventDefault();
      // Use FormData for file upload
      const formData = new FormData();
      formData.append('title', blogData.title);
      formData.append('preview_text', blogData.preview_text);
      formData.append('blog_text', blogData.blog_text);
      if (blogFile) {
        formData.append('image', blogFile);
      }
      try {
        const response = await axios.post('http://localhost:5000/api/admin/create-blog', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setBlogMessage(response.data.message);
        setBlogData({ title: '', preview_text: '', blog_text: '' });
        setBlogFile(null);
        // Optionally refresh blog list
        const blogsRes = await axios.get('http://localhost:5000/api/blog/blogs-all');
        setBlogs(blogsRes.data.blogs);
      } catch (err) {
        console.error('Error creating blog post:', err);
        setBlogMessage(err.response?.data?.message || 'Error creating blog post.');
      }
    };
    
    // Handler for blog deletion
    const handleDeleteBlog = async (e) => {
      e.preventDefault();
      try {
        await axios.delete('http://localhost:5000/api/admin/delete-blog', {
          data: { blogId: selectedBlogForDeletion }
        });
        setDeleteBlogMessage('Blog post deleted successfully.');
        setSelectedBlogForDeletion('');
        // Optionally refresh blog list
        const blogsRes = await axios.get('http://localhost:5000/api/blog/blogs-all');
        setBlogs(blogsRes.data.blogs);
      } catch (err) {
        console.error('Error deleting blog post:', err);
        setDeleteBlogMessage(err.response?.data?.message || 'Error deleting blog post.');
      }
    };
  // HANDLERS FOR ADDING TRAINING
  const handleTrainingInputChange = (e) => {
    setNewTraining({ ...newTraining, [e.target.name]: e.target.value });
  };

  const handleTrainingSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/add-training', {
        planId: selectedPlanForTraining,
        ...newTraining
      });
      setTrainingMessage('Trening je uspešno dodat!');
      setNewTraining({
        naziv_nedelje: '',
        trening_dan: '',
        vezba_naziv: '',
        tezina: '',
        broj_ponavljanja: '',
        napomena:''
      });
    } catch (err) {
      console.error('Error adding training:', err);
      setTrainingMessage('Greška prilikom dodavanja treninga.');
    }
  };

  // HANDLER FOR CREATING A NEW PLAN
  const handlePlanSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/create-plan', {
        naziv: newPlanName
      });
      setPlanMessage('Plan je uspešno kreiran!');
      setNewPlanName('');
      // Refresh list of plans
      const plansRes = await axios.get('http://localhost:5000/api/admin/plans');
      setPlans(plansRes.data.plans);
    } catch (err) {
      console.error('Error creating plan:', err);
      setPlanMessage('Greška prilikom kreiranja plana.');
    }
  };

  // HANDLER FOR ASSIGNING A PLAN TO A CLIENT
  const handleAssignSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/assign-plan', {
        clientId: selectedClientForPlan,
        planId: selectedPlanForAssignment
      });
      setAssignMessage('Plan je uspešno dodeljen klijentu!');
    } catch (err) {
      console.error('Error assigning plan:', err);
      setAssignMessage('Greška prilikom dodele plana.');
    }
  };

  // HANDLER FOR ASSIGNING A MEAL PLAN TO A CLIENT
  const handleMealPlanSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/assign-meal-plan', {
        clientId: selectedClientForMealPlan,
        mealPlanLink: mealPlanLink
      });
      setMealPlanMessage('Plan ishrane je uspešno dodeljen klijentu!');
      setMealPlanLink('');
    } catch (err) {
      console.error('Error assigning meal plan:', err);
      setMealPlanMessage('Greška prilikom dodele plana ishrane.');
    }
  };

  // HANDLER FOR DELETING A PLAN (from the plan table)
  const handleDeletePlan = async (e) => {
    e.preventDefault();
    try {
      await axios.delete('http://localhost:5000/api/admin/delete-plan', {
        data: { planId: selectedPlanForDeletion }
      });
      setDeletePlanMessage('Plan je uspešno obrisan.');
      setSelectedPlanForDeletion('');
      // Refresh list of plans
      const plansRes = await axios.get('http://localhost:5000/api/admin/plans');
      setPlans(plansRes.data.plans);
    } catch (err) {
      console.error('Error deleting plan:', err);
      setDeletePlanMessage(err.response?.data?.message || 'Greška pri brisanju plana.');
    }
  };

  // HANDLER FOR CREATING A NEW CLIENT
  const handleClientInputChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/create-client', newClient);
      setClientMessage('Klijent je uspešno kreiran!');
      setNewClient({ ime: '', prezime: '', email: '', password: '', obavestiKlijenta: true });
      // Optionally refresh client list
      const clientsRes = await axios.get('http://localhost:5000/api/admin/clients');
      setClients(clientsRes.data.clients);
    } catch (err) {
      console.error('Error creating client:', err);
      setClientMessage('Greška prilikom kreiranja klijenta.');
    }
  };

  // HANDLER FOR DELETING A CLIENT
  const handleDeleteClient = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete('http://localhost:5000/api/admin/delete-client', {
        data: { email: deleteEmail }
      });
      setDeleteMessage(response.data.message);
      setDeleteEmail('');
      // Optionally, refresh client list
      const clientsRes = await axios.get('http://localhost:5000/api/admin/clients');
      setClients(clientsRes.data.clients);
    } catch (err) {
      console.error('Error deleting client:', err);
      setDeleteMessage(err.response?.data?.message || 'Greška pri brisanju klijenta.');
    }
  };

  return (
    <div className="admin-dashboard d-flex">
      <div className="dashb">
        <div className="left-panel">
          {/* Section for adding training to a plan */}
          <div className="add-training-section">
            <h3>Dodaj novi trening u plan</h3>
            <form onSubmit={handleTrainingSubmit}>
              <div>
                <label>Izaberite plan: </label>
                <select
                  value={selectedPlanForTraining}
                  onChange={(e) => setSelectedPlanForTraining(e.target.value)}
                  required
                >
                  <option value="">--Izaberite plan--</option>
                  {plans.map(plan => (
                    <option key={plan.id} value={plan.id}>
                      {plan.naziv}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Nedelja (broj): </label>
                <input
                  type="number"
                  name="naziv_nedelje"
                  value={newTraining.naziv_nedelje}
                  onChange={handleTrainingInputChange}
                  required
                />
              </div>
              <div>
                <label>Dan treninga: </label>
                <select
                  name="trening_dan"
                  value={newTraining.trening_dan}
                  onChange={handleTrainingInputChange}
                  required
                >
                  <option value="">--Izaberite dan--</option>
                  <option value="Ponedeljak">Ponedeljak</option>
                  <option value="Utorak">Utorak</option>
                  <option value="Sreda">Sreda</option>
                  <option value="Četvrtak">Četvrtak</option>
                  <option value="Petak">Petak</option>
                  <option value="Subota">Subota</option>
                  <option value="Nedelja">Nedelja</option>
                </select>
              </div>
              <div>
                <label>Naziv vežbe: </label>
                <select
                  name="vezba_naziv"
                  value={newTraining.vezba_naziv}
                  onChange={(e) =>
                    setNewTraining({ ...newTraining, vezba_naziv: e.target.value })
                  }
                  required
                >
                  <option value="">--Izaberite vežbu--</option>
                  {exercises.map((exercise) => (
                    <option key={exercise.id} value={exercise.id}>
                      {exercise.naziv}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Težina (kg): </label>
                <input
                  type="text"
                  name="tezina"
                  value={newTraining.tezina}
                  onChange={handleTrainingInputChange}
                  required
                />
              </div>
              <div>
                <label>Broj ponavljanja: </label>
                <input
                  type="text"
                  name="broj_ponavljanja"
                  value={newTraining.broj_ponavljanja}
                  onChange={handleTrainingInputChange}
                  required
                />
              </div>
              <div>
                <label>Napomena:  </label>
                <input
                  type="text"
                  name="napomena"
                  value={newTraining.napomena}
                  onChange={handleTrainingInputChange}
                  required
                />
              </div>
              <button type="submit">Dodaj trening</button>
            </form>
            {trainingMessage && <p>{trainingMessage}</p>}
          </div>
          
          {/* Section for creating a new client */}
          <div className="create-client-section">
            <h3>Kreiraj novog klijenta</h3>
            <form onSubmit={handleClientSubmit}>
              <div>
                <label>Ime: </label>
                <input
                  type="text"
                  name="ime"
                  value={newClient.ime}
                  onChange={handleClientInputChange}
                  required
                />
              </div>
              <div>
                <label>Prezime: </label>
                <input
                  type="text"
                  name="prezime"
                  value={newClient.prezime}
                  onChange={handleClientInputChange}
                  required
                />
              </div>
              <div>
                <label>Email: </label>
                <input
                  type="email"
                  name="email"
                  value={newClient.email}
                  onChange={handleClientInputChange}
                  required
                />
              </div>
              <div>
                <label>Lozinka: </label>
                <input
                  type="password"
                  name="password"
                  value={newClient.password}
                  onChange={handleClientInputChange}
                  required
                />
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="obavestiKlijenta"
                    checked={newClient.obavestiKlijenta || false}
                    onChange={(e) =>
                      setNewClient({ ...newClient, obavestiKlijenta: e.target.checked })
                    }
                  />
                  Obavesti klijenta
                </label>
              </div>
              <button type="submit">Kreiraj klijenta</button>
            </form>
            {clientMessage && <p>{clientMessage}</p>}
          </div>
          
          {/* Section for deleting a client */}
          
          <div className="create-blog-section">
          <h3>Kreiraj novi blog post</h3>
          <form onSubmit={handleBlogSubmit}>
            <div>
              <label>Title: </label>
              <input
                type="text"
                name="title"
                value={blogData.title}
                onChange={handleBlogInputChange}
                required
              />
            </div>
            <div>
              <label>Preview Text: </label>
              <textarea
                name="preview_text"
                value={blogData.preview_text}
                onChange={handleBlogInputChange}
                required
              ></textarea>
            </div>
            <div>
              <label>Blog Text: </label>
              <textarea
                name="blog_text"
                value={blogData.blog_text}
                onChange={handleBlogInputChange}
                required
              ></textarea>
            </div>
            <div>
              <label>Upload Image: </label>
              <input type="file" name="image" onChange={handleBlogFileChange} />
            </div>
            <button type="submit">Kreiraj blog</button>
          </form>
          {blogMessage && <p>{blogMessage}</p>}
        </div>
        
        </div>

        <div className="right-panel">
          {/* Section for creating a new plan */}
          <div className="create-plan-section">
            <h3>Kreiraj novi plan treninga</h3>
            <form onSubmit={handlePlanSubmit}>
              <div>
                <label>Naziv plana: </label>
                <input
                  type="text"
                  value={newPlanName}
                  onChange={(e) => setNewPlanName(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Kreiraj plan</button>
            </form>
            {planMessage && <p>{planMessage}</p>}
          </div>

          {/* Section for assigning a plan to a client */}
          <div className="assign-plan-section">
            <h3>Dodeli plan treninga klijentu</h3>
            <form onSubmit={handleAssignSubmit}>
              <div>
                <label>Izaberite klijenta: </label>
                <select
                  value={selectedClientForPlan}
                  onChange={(e) => setSelectedClientForPlan(e.target.value)}
                  required
                >
                  <option value="">--Izaberite klijenta--</option>
                  {clients.map(client => (
                    <option key={client.id} value={client.id}>
                      {client.ime} ({client.email})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Izaberite plan: </label>
                <select
                  value={selectedPlanForAssignment}
                  onChange={(e) => setSelectedPlanForAssignment(e.target.value)}
                  required
                >
                  <option value="">--Izaberite plan--</option>
                  {plans.map(plan => (
                    <option key={plan.id} value={plan.id}>
                      {plan.naziv}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit">Dodeli plan</button>
            </form>
            {assignMessage && <p>{assignMessage}</p>}
          </div>

          {/* Section for assigning a meal plan to a client */}
          <div className="assign-meal-plan-section">
            <h3>Dodeli plan ishrane klijentu</h3>
            <form onSubmit={handleMealPlanSubmit}>
              <div>
                <label>Izaberite klijenta: </label>
                <select
                  value={selectedClientForMealPlan}
                  onChange={(e) => setSelectedClientForMealPlan(e.target.value)}
                  required
                >
                  <option value="">--Izaberite klijenta--</option>
                  {clients.map(client => (
                    <option key={client.id} value={client.id}>
                      {client.ime} ({client.email})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Link plana ishrane: </label>
                <input
                  type="text"
                  value={mealPlanLink}
                  onChange={(e) => setMealPlanLink(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Dodeli plan ishrane</button>
            </form>
            {mealPlanMessage && <p>{mealPlanMessage}</p>}
          </div>

          {/* New section for deleting an existing plan */}
          <div className="delete-client-section">
            <h3>Obriši klijenta</h3>
            <form onSubmit={handleDeleteClient}>
              <div>
                <label>Email: </label>
                <input
                  type="email"
                  value={deleteEmail}
                  onChange={(e) => setDeleteEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Obriši klijenta</button>
            </form>
            {deleteMessage && <p>{deleteMessage}</p>}
          </div>
          <div className="delete-plan-section">
            <h3>Obriši plan treninga</h3>
            <form onSubmit={handleDeletePlan}>
              <div>
                <label>Izaberite plan: </label>
                <select
                  value={selectedPlanForDeletion}
                  onChange={(e) => setSelectedPlanForDeletion(e.target.value)}
                  required
                >
                  <option value="">--Izaberite plan--</option>
                  {plans.map(plan => (
                    <option key={plan.id} value={plan.id}>
                      {plan.naziv}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit">Obriši plan</button>
            </form>
            {deletePlanMessage && <p>{deletePlanMessage}</p>}
          </div>
          
        {/* New section for deleting a blog post */}
        <div className="delete-blog-section">
          <h3>Obriši blog post</h3>
          <form onSubmit={handleDeleteBlog}>
            <div>
              <label>Izaberite blog post: </label>
              <select
                value={selectedBlogForDeletion}
                onChange={(e) => setSelectedBlogForDeletion(e.target.value)}
                required
              >
                <option value="">--Izaberite blog post--</option>
                {blogs.map((blog) => (
                  <option key={blog.title} value={blog.title}>
                    {blog.title}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit">Obriši blog</button>
          </form>
          {deleteBlogMessage && <p>{deleteBlogMessage}</p>}
         </div>
          <button className="button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
