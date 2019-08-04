function Sum {
	var sum = 0, flag = 1;
	while (flag <= 99) {
		if (flag % 2 != 0) {
			sum += flag;
		}
		flag++;
	}
	alert(sum);
}
