import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Ensure FaLinkedin is imported

const Projects = () => {
    return (
        <section id="projects" className="bg-black text-white">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

                {/* Added max-w-4xl mx-auto to center the cards */}
                <div className="flex flex-col gap-8">

                    {/* Project 1: Generative Recipe Model - (Reference Structure) */}
                    <div className="bg-[#101111] rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]">
                        <div>
                            {/* Header Block: Title and Icons */}
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold">Generative Recipe Model</h3>

                                <div className="flex space-x-3 text-white">
                                    {/* GitHub Link */}
                                    <a
                                        href="https://github.com/ayush-mourya/Novel-Recipe-Generation" // **ACTION: Replace with actual GitHub link**
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400 transition-colors duration-200"
                                        aria-label="GitHub Repository"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                    {/* LinkedIn Link */}
                                    <a
                                        href="https://www.linkedin.com/posts/ayush-kumar-mourya-2b391b279_novel-recipe-generation-using-lstm-transformer-based-activity-7326619893636681728-k7Ow?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPyGOcBywH-0bwbqNf7dL1hEyAb7ANLDi4" // **ACTION: Replace with actual LinkedIn link**
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400 transition-colors duration-200"
                                        aria-label="LinkedIn Post"
                                    >
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-sm italic text-gray-400 mb-4">
                                Python, LSTM, Transformers, Web Scraping, Hugging Face
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Built a generative recipe model using LSTM and GPT architectures, improving BLEU score from 0.361 (char-level LSTM) to 0.723 (DeepSeek Qwen 1.5).</li>
                                <li>Conducted large-scale web scraping of 500,000+ recipe pages, achieving 98% valid entries in the training corpus.</li>
                                <li>Engineered tokenization pipelines and fine-tuned GPT-2 and DeepSeek models on a dataset of 200,000 recipes.</li>
                                <li>Optimized training with dynamic batching, reducing training time by 15%.</li>
                            </ul>
                        </div>
                        {/* Removed the old redundant footer block */}
                    </div>

                    {/* Project 2: Rice Image Classification - MODIFIED */}
                    <div className="bg-[#101111] rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]">
                        <div>
                            {/* Header Block: Title and Icons (New Structure Applied) */}
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold">Rice Image Classification</h3>
                                
                                <div className="flex space-x-3 text-white">
                                    {/* GitHub Link */}
                                    <a
                                        href="https://github.com/ayush-mourya/Rice-classification-using-Machine-Learning-and-CNN" // Placeholder for project-specific link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400 transition-colors duration-200"
                                        aria-label="GitHub Repository"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                    {/* LinkedIn Link */}
                                    <a
                                        href="https://www.linkedin.com/posts/ayush-kumar-mourya-2b391b279_%F0%9D%97%A5%F0%9D%97%B6%F0%9D%97%B0%F0%9D%97%B2-%F0%9D%97%96%F0%9D%97%B9%F0%9D%97%AE%F0%9D%98%80%F0%9D%98%80%F0%9D%97%B6%F0%9D%97%B3%F0%9D%97%B6%F0%9D%97%B0%F0%9D%97%AE%F0%9D%98%81%F0%9D%97%B6%F0%9D%97%BC%F0%9D%97%BB-%F0%9D%97%A8%F0%9D%98%80%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B4-activity-7291886730289287168-1Mas?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPyGOcBywH-0bwbqNf7dL1hEyAb7ANLDi4" // Placeholder for project-specific link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400 transition-colors duration-200"
                                        aria-label="LinkedIn Post"
                                    >
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>
                            
                            <p className="text-sm italic text-gray-400 mb-4">
                                Python, scikit-learn, TensorFlow, OpenCV, CNN
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Built an ML pipeline for classifying 75,000 rice grain images across 5 varieties, achieving 96% accuracy with CNN (vs 90% ML baseline).</li>
                                <li>Enhanced dataset reliability using outlier removal (7.5%) and augmentation (+8,000 synthetic images).</li>
                                <li>Reduced overfitting by 22% through dropout tuning (0.3 → 0.5) and early stopping.</li>
                                <li>Analyzed performance with confusion matrices, ROC curves (AUC 0.95–0.98), and training metrics.</li>
                            </ul>
                        </div>
                        {/* Removed the old redundant footer block */}
                    </div>

                    {/* Project 3: Gene Expression Analysis - MODIFIED */}
                    <div className="bg-[#101111] rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]">
                        <div>
                            {/* Header Block: Title and Icons (New Structure Applied) */}
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold">Gene Expression Analysis</h3>
                                
                                <div className="flex space-x-3 text-white">
                                    {/* GitHub Link */}
                                    <a
                                        href="https://github.com/ayush-mourya/Gene-Expression-Analysis-" // Placeholder for project-specific link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400 transition-colors duration-200"
                                        aria-label="GitHub Repository"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                    {/* LinkedIn Link */}
                                    <a
                                        href="https://www.linkedin.com/posts/ayush-kumar-mourya-2b391b279_github-ayush-mouryagene-expression-analysis-activity-7291778596405161984-Foxs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPyGOcBywH-0bwbqNf7dL1hEyAb7ANLDi4" // Placeholder for project-specific link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400 transition-colors duration-200"
                                        aria-label="LinkedIn Post"
                                    >
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>
                            
                            <p className="text-sm italic text-gray-400 mb-4">
                                Python, Pandas, PCA, ML
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Processed 10,000+ microarray samples to distinguish between acute and chronic leukemia.</li>
                                <li>Applied PCA to reduce dimensionality from 100+ features to top 20, cutting training time by 40%.</li>
                                <li>Built classification models (SVM, Random Forest, Logistic Regression), improving accuracy from 90% to 94%.</li>
                            </ul>
                        </div>
                        {/* Removed the old redundant footer block */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;