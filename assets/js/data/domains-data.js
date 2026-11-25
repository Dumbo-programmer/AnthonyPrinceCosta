/* domains data */
(function () {
  'use strict';

  window.SiteData = window.SiteData || {};
  window.SiteData.domains = [
  {
    id: 1,
    branch: 'Pure',
    num: '01',
    code: 'DOMAIN 01',
    symbol: '∫',
    title: 'Calculus & Real Analysis',
    subtitle: 'Continuity, Rates of Change & Accumulation',
    category: 'Infinitesimal Analysis',
    theoremName: 'Fundamental Theorem of Calculus & ε–δ Continuity',
    formula: "∫ₐᵇ f'(x) dx = f(b) − f(a)   |   f'(x) = lim(h→0) [f(x+h) − f(x)] / h",
    topics: [
      'Completeness of ℝ, limits, continuity, and differentiability from first principles',
      'Differential calculus: chain rule, Taylor expansions, curvature & optimization',
      'Riemann integration, differential equations, and convergence of infinite series'
    ],
    intuition: 'Bridges the local geometry of tangent lines with global accumulation under curves, revealing differentiation and integration as dual inverse operations.'
  },
  {
    id: 2,
    branch: 'Pure',
    num: '02',
    code: 'DOMAIN 02',
    symbol: 'λ',
    title: 'Linear Algebra & Matrix Theory',
    subtitle: 'Vector Spaces, Linear Maps & Spectral Structure',
    category: 'Abstract & Linear Structures',
    theoremName: 'Invertibility & Spectral Eigenvalue Relation',
    formula: 'A v = λ v   |   det(A − λI) = 0   |   A⁻¹ = (1 / det A) · adj(A)',
    topics: [
      'Vector spaces, linear independence, basis, dimension, and rank-nullity',
      'Matrix decompositions, determinants as oriented volume scaling, and Cramer’s rule',
      'Linear transformations, eigenvalues, eigenvectors, and diagonalization'
    ],
    intuition: 'Interprets matrices not merely as grids of numbers, but as geometric transformations that stretch, rotate, and shear space along invariant eigen-directions.'
  },
  {
    id: 3,
    branch: 'Applied',
    num: '03',
    code: 'DOMAIN 03',
    symbol: '∠',
    title: 'Analytic & Euclidean Geometry',
    subtitle: 'Coordinate Loci, Conic Sections & Spatial Vectors',
    category: 'Spatial & Coordinate Geometry',
    theoremName: 'Unified Eccentricity & Orthogonality Conditions',
    formula: 'SP / PM = e   |   x²/a² ± y²/b² = 1   |   A · B = |A||B| cosθ',
    topics: [
      'Cartesian and polar coordinate transformations, straight lines, and circles',
      'Unified focus-directrix geometry of parabolas (e=1), ellipses (e<1), and hyperbolas (e>1)',
      'Three-dimensional spatial vectors, scalar/cross products, and trigonometric identities'
    ],
    intuition: 'Translates pure spatial symmetry into algebraic invariants, allowing geometric loci and tangency to be reasoned about with complete precision.'
  },
  {
    id: 4,
    branch: 'Pure',
    num: '04',
    code: 'DOMAIN 04',
    symbol: 'ℂ',
    title: 'Complex Analysis & Number Theory',
    subtitle: 'The Argand Plane, Polynomials & Discrete Counting',
    category: 'Algebra & Complex Plane',
    theoremName: 'Euler’s Formula & Fundamental Theorem of Algebra',
    formula: 'e^(iθ) = cosθ + i sinθ   |   z = r e^(iθ)   |   1 + ω + ω² = 0',
    topics: [
      'Complex arithmetic, modulus-argument geometry, De Moivre’s theorem & roots of unity',
      'Polynomial structure, Vieta’s symmetric root relations, and binomial expansions',
      'Combinatorial enumeration, permutations, recurrence, and modular reasoning'
    ],
    intuition: 'Unifies algebra and trigonometry on the Argand plane, where complex multiplication becomes pure rotation and scaling.'
  },
  {
    id: 5,
    branch: 'Applied',
    num: '05',
    code: 'DOMAIN 05',
    symbol: '∇',
    title: 'Classical Mechanics & Applied Math',
    subtitle: 'Equilibrium of Forces, Kinematics & Particle Dynamics',
    category: 'Mathematical Physics',
    theoremName: 'Lami’s Equilibrium & Parabolic Trajectory Law',
    formula: 'P / sinα = Q / sinβ = R / sinγ   |   y = x tanα − (g x²) / (2u² cos²α)',
    topics: [
      'Statics: composition and resolution of concurrent forces, moments, and equilibrium',
      'Kinematics: rectilinear acceleration, relative velocity, and constrained motion',
      'Dynamics: projectile trajectories in a plane, Newton’s laws, and work-energy principles'
    ],
    intuition: 'Demonstrates how vector decomposition and differential equations govern physical motion and static equilibrium in the real world.'
  },
  {
    id: 6,
    branch: 'Applied',
    num: '06',
    code: 'DOMAIN 06',
    symbol: 'σ',
    title: 'Probability & Statistical Inference',
    subtitle: 'Measure of Uncertainty, Distributions & Bayesian Logic',
    category: 'Stochastic Reasoning',
    theoremName: 'Bayes’ Theorem & Variance Decomposition',
    formula: 'P(A|B) = [P(B|A) · P(A)] / P(B)   |   σ² = E[(X − μ)²]',
    topics: [
      'Axiomatic probability spaces, conditional probability, and independence',
      'Bayes’ theorem for updating belief under empirical evidence',
      'Measures of central tendency, dispersion, variance, and probability distributions'
    ],
    intuition: 'Provides a rigorous calculus for quantifying uncertainty, separating structural signal from random variation.'
  }
];
})();
