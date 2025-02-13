/*******************Day 12 LeetCode(Revision Day)************************/
/******* Question 1********/
//Given two sorted integer arrays nums1 and nums2, merge them into a single sorted array in non-decreasing order. Store the result in nums1.
//nums1 has a length of m + n, where the first m elements are valid and the last n elements are zeroes (to be replaced by nums2).
// nums2 has n elements.
//Do not return anything; modify nums1 in-place.
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
};
/******* Question 2********/
//
