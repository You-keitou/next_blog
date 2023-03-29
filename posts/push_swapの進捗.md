---
title: "push_swap進捗"
date: "2023-03-30"
---

## push_swap の双方向リスト実装

- [x] push_swap 　双方向リスト　構造体宣言

```c: push_swap.h
typedef struct s_list
{
    void       *content;
    struct     s_list *next;
    struct     s_list *prev;
}   t_list;
```

- [x] push_swap リスト操作関数実装

```c: utils.c

void printAllnode(t_list **ptr_first, char *stack_name)
{
    t_list *first;

    if (*ptr_first)
    {
        first = *ptr_first;
        printf("stack %s is \n", stack_name);
        while (1)
        {
            printf("%d\n",*((int *)first->content));
            first = first->next;
            if (first == *ptr_first || !first)
                break;
        }
    }
}

void	printNodeContent(t_list node)
{
    printf("%d\n",*((int *)(node.content)));
}

void	push(t_list **a_first, t_list **b_first)
{
    t_list *cur_first;
    t_list *cur_last;

    if (!a_first || !b_first)
        return;
    if (*a_first)
    {
        cur_first = (*a_first)->next;
        cur_last = (*a_first)->prev;
        ft_lstadd_front(b_first, *a_first);
        if (!cur_first && !cur_last)
            *a_first = NULL;
        else
        {
            *a_first = cur_first;
            if (cur_first != cur_last)
                connect(cur_first, cur_last);
            else
            {
                (*a_first)->next = NULL;
                (*a_first)->prev = NULL;
            }
        }
    }
}

void	connect(t_list *first, t_list *second){
    if (!first || !second)
        return;
    first->prev = second;
    second->next = first;
}

void	swap(t_list **stack)
{
    void	*content_tmp;
    t_list	*first;
    t_list	*second;

    if (!(*stack))
        return;
    first = *stack;
    second = first->next;
    if (!first || first->prev == second)
        return;
    content_tmp = first->content;
    first->content = second->content;
    second->content = content_tmp;
}

void	rotate(t_list **stack)
{
    if (!(*stack) || !((*stack)->next))
        return;
    *stack = (*stack)->next;
}

void	reverse_rotate(t_list **stack)
{
    if (!(*stack) || !((*stack)->next))
        return;
    *stack = (*stack)->prev;
}

```
