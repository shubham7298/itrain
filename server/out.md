# Clustering

---

# Agenda

* __Supervised vs Unsupervised learning__
* __Types of Unsupervised learning__
  * Clustering
  * Association
* __Clustering__
  * Types of clustering
  * Clustering Techniques
  * Hierarchical Clustering
  * K\-means Clustering
  * K\-means in python
  * Clustering use cases
  * Applications



---

# Supervised vs Unsupervised learning

__Unsupervised Learning__

__Supervised Learning__



---

# Types of Unsupervised Learning

__Unsupervised Learning__



---

__Unsupervised Learning__

<img src="img/Clustering0.png" width=384px />

<img src="img/Clustering1.png" width=384px />

__FP – growth Algorithm__

__K\- means Clustering__

__Hierarchical Clustering__

__Apriori__  __Algorithm__



---

# Association Rule Mining

<img src="img/Clustering2.jpg" width=276px />



---

# Clustering

A _cluster_ is collection of objects whichare“similar”  between them andare“dissimilar”tothe objects belongingtootherclusters\.

Forexamplebased on theincomeofcustomerswe couldgrouptheminto“LowIncome”\,“ModerateIncome” and“HighIncome”\.

Itseasytoclassify withonevariable\,butwhenseveralvariablescomeinto playthegroupingwould become difficult\.



---

# Distance Metrics

* Many supervised and unsupervised machine learning algorithm depends upon the distance between 2 data points\.
* Some of the distance metrics commonly used in machine learning models are\,
  * Euclidean Distance
  * Manhattan Distance
  * Minkowski Distance
  * Cosine Distance
* The commonly used distance metrics in clustering algorithm is __Euclidean Distance__

<img src="img/Clustering3.jpg" width=500px />

__Euclidean Distance__

The Euclidean distance between points p and q is the length of the line segment connecting p and q

In Cartesian coordinates\, if p = \(p1\, p2\,\.\.\.\,pn\) and q = \(q1\, q2\,\.\.\.\,qn\) are two points in Euclidean n\-space\, then the Euclidean distance \(d\) from p to q\, or from q to p is given by the Pythagorean formula

<img src="img/Clustering4.png" width=500px />



---

# Types of Cluster Analysis

<span style="color:#FFFFFF"> __Density Clustering__ </span>

<span style="color:#FFFFFF">Clusters are defined by areas of concentrated densities\. This method begins by searching for  areas of dense data points and assigns those areas to the same cluster</span>

<span style="color:#808080"> __Centroid Clustering__ </span>

<span style="color:#808080">Each cluster is represented by a centroid which derives clusters based on the distance of the data point to the centroid of the clusters\. It minimizes the intra cluster distances maximizing the inter cluster distances</span>

<span style="color:#FFFFFF"> __Distribution Clustering__ </span>

<span style="color:#FFFFFF">This method each cluster belongs to normal distribution\.</span>  <span style="color:#FFFFFF">The idea is that the data points are divided based on probability of belonging to the same normal distribution\.</span>

<span style="color:#808080"> __Connectivity Clustering__ </span>

<span style="color:#808080">The Clusters are defined by grouping the nearest neighbors\, based on the data points\. The idea is near by data points are more related than the other points farther away\. These cluster represents hierarchy</span>



---

__Density Clustering__

__Centroid Clustering__

<img src="img/Clustering5.jpg" width=500px />

<img src="img/Clustering6.png" width=186px />

<img src="img/Clustering7.jpg" width=500px />

__Distribution Clustering__

__Hierarchical Clustering__



---

# Clustering Techniques

<span style="color:#808080">Hierarchical</span>

<span style="color:#808080">Clustering</span>

<span style="color:#808080">K\- Means</span>

<span style="color:#808080">Clustering</span>

* <span style="color:#404040">Small Data \(N<100\)</span>
* <span style="color:#404040">Performed by two approaches</span>
  * <span style="color:#404040">Agglomerative</span>
  * <span style="color:#404040">Decisive</span>
* <span style="color:#404040">Number of clusters can be determined through final</span>  <span style="color:#404040">dendogram</span>
* <span style="color:#404040">Computationally more expensive</span>

<span style="color:#404040">Large Data \(N>100\)</span>

<span style="color:#404040">Number of clusters should be pre determined</span>

<span style="color:#404040">Computationally less expensive</span>



---

# Hierarchical Clustering

Hierarchical Clustering is a method of cluster analysis which seeks to build a hierarchy of clusters\. \[Wikipedia\]



---

Startwitheachobservationasindividualcluster andateach stepcombineobservations/ Clustersto  formonelarge  clusters

Begin withonelargecluster  andproceed tosplitintosmaller cluster  itemsthat aremostdissimilar



---

# Linkages

In the <span style="color:#FFC000"> __single\-link__ </span> method\, thedistance between twoclustersis the _minimum_ of thedistances betweenallpairsofpatternsdrawnonefromeachcluster\.

In the <span style="color:#FFC000"> __complete\-link__ </span> algorithm\,thedistance between  twoclustersis the _maximum_ of all pairwisedistances  betweenpairsofpatternsdrawnonefromeachcluster\.

In the <span style="color:#FFC000"> __average\-link__ </span> algorithm\,thedistance between  twoclustersis the _average_ of all pairwisedistances  betweenpairsofpatternsdrawnonefromeachcluster\(which is thesameas thedistance betweenthe means in thevectorspace case – easiertocalculate\)\.

In the <span style="color:#FFC000"> __Centroid__ </span> method thegeometric centreiscomputed\.Thedistance between twoclustersequals  thedistance between twocentroids\.



---

# Agglomerative Clustering - Process

At the start\, treat each data point as one cluster\. Therefore\, the number of clusters at the start will be K\, while K is an integer representing the number of data points\.

Form a cluster by joining the two closest data points resulting in K\-1 clusters\.

Form more clusters by joining the two closest clusters resulting in K\-2 clusters\.

Repeat the above three steps until one big cluster is formed\.

Once single cluster is formed\, dendrograms are used to divide into multiple clusters depending upon the problem\.



---

# Agglomerative Clustering

<img src="img/Clustering8.png" width=418px />

<img src="img/Clustering9.png" width=250px />

Agglomerative Representation



---

# K- means Clustering

<img src="img/Clustering10.png" width=225px />

* The k\-means algorithm works on the partitioning  criteria “ <span style="color:#FFC000">maximize intra\-cluster similarity and minimize inter\-cluster  similarity</span> ”
* The “K” in K\-Means refers to the number of clusters\.
* For a given number of partitions \(say k\)\, the algorithm creates an initial k partitions with centroids chosen randomly
* Then it uses the iterative reallocation technique to improve the  partitioning by moving objects from one group to other\.
* The centroid are reassigned to the mean of all the data points in the cluster\.
  * Clusters produced vary from one run to another\.
* ‘Closeness’ is measured by Euclidean distance

K=3\, K centroids are randomly initialised

<img src="img/Clustering11.png" width=223px />

K clusters are created by associating every observation with nearest centroid

<img src="img/Clustering12.jpg" width=228px />

The mean of each clusters becomes the new centroid

<img src="img/Clustering13.jpg" width=227px />

Iteration continues till it reaches convergence



---

What do you think is the ideal number of clusters?



---

Step 1: Select the number of clusters to be identified \(Lets select 3 for this case\)

Step 2: Randomly select 3 distinct data point \( These points are centroids for each clusters\)

Step 3: Measure the distance between first point and selected 3 clusters

Step 4: Assign the first point to the nearest cluster \( <span style="color:#FF0000">Red</span> in the case\)



---

Step 5: Calculate the mean value including the new point for the red cluster

Find out which cluster the point 2 belongs to\, how?

Repeat the same procedure but measure the distance to the <span style="color:#FF0000">red</span> mean

Step 4 and 5 are repeated for each data point



---

To which cluster this point belongs to?

To which cluster does this point belongs to ?



---

Since all these points are closer to green cluster\, all are assigned Cluster <span style="color:#2C973E">Green</span>



---

Result from 1stIteration

Original/Expected Result



---

Second Iteration

Minimize Within Cluster sum of squares \(WCSS\) \(i\.e\. variance\)

<img src="img/Clustering14.jpg" width=500px />



---

# WCSS and BCSS

WCSS measures the variability of the observations within each cluster\.

A cluster that has a small sum of squares is more compact than a cluster that has a large sum of squares\. Clusters that have higher values exhibit greater variability of the observations within the cluster\.

WCSS is influenced by the number of observations\. As the number of observations increases\, the sum of squares increases\.

BCSS measures the squared average distance between all centroids\.

Essentially\, BCSS measures the variation between all clusters\. A large value can indicate clusters that are spread out\, while a small value can indicate clusters that are close to each other\.

Within Cluster Sum of Squares

<img src="img/Clustering15.jpg" width=500px />

<img src="img/Clustering16.png" width=500px />

Between Clusters Sum of Squares



---

# Elbow method

The "elbow" or "knee of a curve" as a cut\-off point is a common heuristic in  optimization to choose a point where diminishing returns are no longer worth the additional cost\.

In clustering\, this means defining the number of clusters so that adding another cluster doesn't give much better modelling of the data\.

The intuition is that increasing the number of clusters will naturally improve the fit but this might cause over\-fitting\.

Once the number of clusters exceeds the actual number of groups in the data\, the added information will drop sharply\, because it is just subdividing the actual groups\.

Assuming this happens\, there will be a sharp elbow in the graph of explained variation versus clusters: increasing rapidly up to _k_ \(under\-fitting region\)\, and then increasing slowly after _k_ \(over\-fitting region\)\.

x\-axis\-number ofclusters

y\-axis\-withinClustersum of  squares

The point atwhich the chartbendsor thewcss becomessmallwould be  consideredas theoptimal numberofclusters



---

# Applications

<img src="img/Clustering17.png" width=470px />

<img src="img/Clustering18.jpg" width=279px />

<img src="img/Clustering19.png" width=433px />

<img src="img/Clustering20.jpg" width=500px />

<img src="img/Clustering21.png" width=275px />



---

# Disadvantages

Difficulty in comparing quality of the clusters produced

Fixed number of clusters can make it difficult to predict what k should be

Does not work non globular data

Sensitive to Outliers and noise

Low capability to pass the local optimum

<img src="img/Clustering22.jpg" width=500px />

<img src="img/Clustering23.jpg" width=500px />



---

# Thank you



---

