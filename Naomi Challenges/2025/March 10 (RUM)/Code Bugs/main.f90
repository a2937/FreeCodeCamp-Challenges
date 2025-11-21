subroutine printLyrics(n)
  integer :: i
  integer :: n
     do i = n,0, -1
     print  *,i, " line of bugs in the code"
     if (i == 0) exit
     print  *,i, " line of bugs!"
     print  *,"          Track one down, patch it out"
end do
end subroutine

  PROGRAM main
  IMPLICIT NONE
  integer :: n
  n = 10
  call printLyrics(n)

END PROGRAM
